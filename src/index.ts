/**
 * @amlplugins/deepgram-listen
 *
 * Thin namespaced re-export of the native @deepgram/sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Deepgram Listen (STT) — Nova-3 transcription (prerecorded) with diarization, smart formatting, redaction.
 */

import * as _sdk from "@deepgram/sdk";
export * from "@deepgram/sdk";
export { _sdk as sdk };
export default _sdk;
