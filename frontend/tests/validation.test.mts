import assert from "node:assert/strict";
import { test } from "node:test";
import {
  INQUIRY_LIMITS,
  hasErrors,
  validateInquiry,
  type InquiryValues,
} from "../lib/validation.ts";

const VALID: InquiryValues = {
  name: "A Client",
  email: "client@company.com",
  projectType: "ai_agent",
  budgetRange: "not_sure",
  message: "We want an agent that handles inbound qualification for our sales team.",
};

test("accepts a complete, well-formed inquiry", () => {
  const errors = validateInquiry(VALID);
  assert.equal(hasErrors(errors), false);
  assert.deepEqual(errors, {});
});

test("requires a name", () => {
  const errors = validateInquiry({ ...VALID, name: "   " });
  assert.ok(errors.name);
});

test("rejects a malformed email", () => {
  const errors = validateInquiry({ ...VALID, email: "not-an-email" });
  assert.ok(errors.email);
});

test("rejects an unsupported project type", () => {
  const errors = validateInquiry({
    ...VALID,
    projectType: "" as InquiryValues["projectType"],
  });
  assert.ok(errors.projectType);
});

test("rejects a message shorter than the minimum", () => {
  const errors = validateInquiry({ ...VALID, message: "too short" });
  assert.ok(errors.message);
});

test("rejects a message longer than the maximum", () => {
  const errors = validateInquiry({
    ...VALID,
    message: "x".repeat(INQUIRY_LIMITS.message.max + 1),
  });
  assert.ok(errors.message);
});

test("flags every invalid field at once", () => {
  const errors = validateInquiry({
    name: "",
    email: "nope",
    projectType: "",
    budgetRange: "",
    message: "",
  });
  assert.equal(Object.keys(errors).length, 4);
});
