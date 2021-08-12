# Changelog

## 2.3.0

### Added

* `editorEvaluation` to the `article-vor` content type.

### Changed

* dependencies for including an `authorReponse`, it can be accompanied with either a `decisionLetter`, an `editorEvaluation`, or both
* mark `application/vnd.elife.article-vor+json;version=5` as deprecated

### Removed

* removed support for `application/vnd.elife.article-vor+json;version=4`

## 2.2.1

### Changed

* duplicate `application/vnd.elife.article-history+json; version=1` examples in `version=2`
* mark `application/vnd.elife.article-history+json; version 1` as deprecated

## 2.2.0

### Added

* `preprint` events to the `article-history` content type.
    - these are versions of the article that were published on pre-print servers before being accepted by eLife

### Changed

* bumps `application/vnd.elife.article-history+json` from `version=1` to `version=2` in the API
    - version 2 article-history responses may contain pre-print events

## 2.1.0
### Added

*no additions*

### Changed

* author preferred field changed from "firstname surname suffix" to "surname firstname suffix" in references and datasets

### Fixed

*no fixes*

### Removed

*no removals*

## 2.0.0
### Added

*no additions*

### Changed

*no changes*

### Fixed

* a couple of typos in api.raml

### Removed

* removed support for article-vor-v3
* removed schema model/article-poa.v1.yaml
* removed schemas model/article-vor.v1.yaml, model/article-vor.v2.yaml and model/article-vor.v3.yaml


## 1.2.0
### Added

* adjusted the samples/article-list/v1/first-page.json to include an example of a poa with only a thumbnail image
* added support for an optional image thumbnail in article poa snippet and full

### Changed

*no changes*

### Fixed

*no fixes*

### Removed

*no removals*

## 1.1.0
### Added

* a reference-v2, dropping the 'required' constraint on the 'page' property
* a article-vor-v5, that uses reference-v2 type references
* adjusted the samples/v5/complete.json example of a minimal reference of type 'journal'
* this changelog!

### Changed

* article-vor-v4 is now *deprecated* and will be removed in a future release

### Fixed

*no fixes*

### Removed

*no removals*
