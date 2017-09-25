# 3. Use deprecated annotation

Date: 2017-09-25

## Status

Accepted

## Context

Versioned APIs need to retire older versions of a schema, in order to keep complexity manageable.

It is not possible to deploy different services atomically so that a new version can be switched on in a short time frame. The changes needed have to be propagated to both clients and servers.

## Decision

We will annotate with `@deprecated` API versions that are not served by default anymore, whenever a new version is added.

## Consequences

After a `application/vnd.elife-covers+json;version=2` type is added, the `application/vnd.elife-covers+json;version=1` should be tagged as deprecated.

The older `application/vnd.elife-covers+json;version=1` should however not be removed until there are no more clients requesting it.
