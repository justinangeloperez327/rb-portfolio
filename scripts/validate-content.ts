import { portfolioContent } from "../content/portfolio.ts";

const errors = [];

function fail(path, message) {
  errors.push(`${path}: ${message}`);
}

function requireText(value, path) {
  if (typeof value !== "string" || value.trim().length === 0) {
    fail(path, "must be a non-empty string");
  }
}

function requireUnique(values, path, normalize = (value) => value) {
  const seen = new Set();

  values.forEach((value, index) => {
    const normalized = normalize(value);

    if (seen.has(normalized)) {
      fail(`${path}[${index}]`, `duplicates "${value}"`);
      return;
    }

    seen.add(normalized);
  });
}

function validateHttpUrl(value, path) {
  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      fail(path, "must use http or https");
    }
  } catch {
    fail(path, "must be a valid URL");
  }
}

function validateIdentity() {
  const { identity } = portfolioContent;

  [
    "name",
    "shortName",
    "firstName",
    "lastName",
    "role",
    "education",
    "positioning",
    "heroKicker",
    "heroDescription",
    "description",
  ].forEach((field) => requireText(identity[field], `identity.${field}`));

  if (identity.shortName.length > 8) {
    fail("identity.shortName", "should stay at 8 characters or fewer");
  }

  if (identity.keywords.length === 0) {
    fail("identity.keywords", "must contain at least one keyword");
  }

  identity.keywords.forEach((keyword, index) =>
    requireText(keyword, `identity.keywords[${index}]`)
  );
  requireUnique(identity.keywords, "identity.keywords", (value) =>
    value.trim().toLowerCase()
  );
}

function validateNavigation() {
  const { navigation } = portfolioContent;

  if (navigation.length === 0) {
    fail("navigation", "must contain at least one destination");
    return;
  }

  requireUnique(
    navigation.map((item) => item.id),
    "navigation ids",
    (value) => value.toLowerCase()
  );
  requireUnique(
    navigation.map((item) => item.index),
    "navigation indices"
  );

  navigation.forEach((item, index) => {
    const path = `navigation[${index}]`;

    requireText(item.label, `${path}.label`);
    requireText(item.id, `${path}.id`);
    requireText(item.index, `${path}.index`);

    if (item.href !== `#${item.id}`) {
      fail(`${path}.href`, `must equal "#${item.id}"`);
    }
  });
}

function validatePublishedProjects() {
  const { entries } = portfolioContent.projects;
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  requireUnique(
    entries.map((project) => project.slug),
    "projects.entries slugs",
    (value) => value.toLowerCase()
  );

  entries.forEach((project, index) => {
    const path = `projects.entries[${index}]`;

    requireText(project.slug, `${path}.slug`);
    requireText(project.title, `${path}.title`);
    requireText(project.subtitle, `${path}.subtitle`);

    if (!slugPattern.test(project.slug)) {
      fail(
        `${path}.slug`,
        "must use lowercase kebab-case with letters and numbers only"
      );
    }

    if (project.status !== "draft" && project.status !== "published") {
      fail(`${path}.status`, 'must be "draft" or "published"');
    }

    if (project.track !== "professional" && project.track !== "technical") {
      fail(
        `${path}.track`,
        'must be "professional" or "technical"'
      );
    }

    project.tags.forEach((tag, tagIndex) =>
      requireText(tag, `${path}.tags[${tagIndex}]`)
    );
    requireUnique(project.tags, `${path}.tags`, (value) =>
      value.trim().toLowerCase()
    );

    if (project.status === "published") {
      ["context", "role", "approach", "outcome"].forEach((field) =>
        requireText(project[field], `${path}.${field}`)
      );

      if (project.tags.length === 0) {
        fail(`${path}.tags`, "published projects must have at least one tag");
      }
    }
  });
}

function validateContactChannels() {
  portfolioContent.contact.channels.forEach((channel, index) => {
    const path = `contact.channels[${index}]`;

    requireText(channel.label, `${path}.label`);
    requireText(channel.detail, `${path}.detail`);
    requireText(channel.status, `${path}.status`);

    if (channel.href === null) {
      return;
    }

    requireText(channel.href, `${path}.href`);

    if (channel.icon === "email") {
      if (!channel.href.startsWith("mailto:")) {
        fail(`${path}.href`, "email links must use mailto:");
      } else if (!channel.href.slice("mailto:".length).includes("@")) {
        fail(`${path}.href`, "must contain an email address");
      }
      return;
    }

    validateHttpUrl(channel.href, `${path}.href`);

    try {
      const url = new URL(channel.href);

      if (
        channel.icon === "linkedin" &&
        !url.hostname.toLowerCase().endsWith("linkedin.com")
      ) {
        fail(`${path}.href`, "LinkedIn channel must point to linkedin.com");
      }

      if (
        channel.icon === "github" &&
        url.hostname.toLowerCase() !== "github.com"
      ) {
        fail(`${path}.href`, "GitHub channel must point to github.com");
      }
    } catch {
      // The general URL validator already reports the malformed URL.
    }
  });
}

function validateOptionalProfileFields() {
  const { education } = portfolioContent.about;
  const { currentRole } = portfolioContent.experience;

  if (education.institution !== null) {
    requireText(education.institution, "about.education.institution");
  }

  if (education.graduationYear !== null) {
    if (!/^\d{4}$/.test(education.graduationYear)) {
      fail("about.education.graduationYear", "must be a four-digit year");
    }
  }

  if (currentRole.employer !== null) {
    requireText(currentRole.employer, "experience.currentRole.employer");
  }

  if (currentRole.location !== null) {
    requireText(currentRole.location, "experience.currentRole.location");
  }

  if (currentRole.startDate !== null) {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(currentRole.startDate)) {
      fail(
        "experience.currentRole.startDate",
        "must use YYYY-MM when provided"
      );
    }
  }
}

function validateSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return;
  }

  validateHttpUrl(siteUrl, "NEXT_PUBLIC_SITE_URL");

  try {
    const url = new URL(siteUrl);

    if (url.pathname !== "/" || url.search || url.hash) {
      fail(
        "NEXT_PUBLIC_SITE_URL",
        "must be an origin/base URL without a path, query, or hash"
      );
    }
  } catch {
    // The general URL validator already reports the malformed URL.
  }
}

validateIdentity();
validateNavigation();
validatePublishedProjects();
validateContactChannels();
validateOptionalProfileFields();
validateSiteUrl();

if (errors.length > 0) {
  console.error("\nPortfolio content validation failed:\n");

  for (const error of errors) {
    console.error(`  - ${error}`);
  }

  console.error(`\n${errors.length} validation error(s) found.\n`);
  process.exit(1);
}

const publishedCount = portfolioContent.projects.entries.filter(
  (project) => project.status === "published"
).length;
const draftCount = portfolioContent.projects.entries.filter(
  (project) => project.status === "draft"
).length;
const linkedContactCount = portfolioContent.contact.channels.filter(
  (channel) => channel.href !== null
).length;

console.log("Portfolio content validation passed.");
console.log(
  `Projects: ${publishedCount} published, ${draftCount} draft. Contact channels: ${linkedContactCount} linked.`
);
