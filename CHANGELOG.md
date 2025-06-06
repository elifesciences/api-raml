# Changelog

## 2.33.0

### Added

* added endpoint for citation metrics by verison DOI to `api.raml` (`metrics/{type}/{id}/citations/version/{version}`)

## 2.32.0

### Added

* add optional `elifeAssessmentSignificance[]` query parameter for `/search`
* add optional `elifeAssessmentStrength[]` query parameter for `/search`

## 2.31.0

### Added

* added `specificUse` to references of type `data` in `misc/reference.v2.yaml`
* add optional strength and significance terms to elifeAssessment
* add optional elifeAssessment to reviewed preprints snippet

### Changed

* move optional elifeAssessment to article-vor snippet

## 2.30.0

### Added

* added optional version to reviewed-preprint

## 2.29.0

### Added

* for `Expression of Concern` article type, added `expression-concern` to list of allowed `type` values in `snippets/article.v1.yaml`
* `expression-concern` to list of `types` in `model/search.v2.yaml`
* added `expression-concern` to `api.raml`

### Changed

* changed `id` URI parameter in `/articles/{id}` from `string` to `integer`.
    - zero padded integers are still integers and are fine.

### Fixed

* fixed typo in `misc/author.v1.yaml` from 'minLenght' to 'minLength'.
* fixed typo in `/highlights` URI parameters from `type` to `list`.
* fixes typo in `/search` query parameter where `type` is actually `type[]`.

## 2.28.0

### Added

* added `awardDoi` to new file `misc/funding.v2.yaml`, a copy of `awardID` when `awardID` is a DOI.
* added `misc/article.v4.yaml` which uses `misc/funding.v2.yaml`
* added `model/article-poa.v4.yaml` which uses `misc/article.v4.yaml`
* added `model/article-vor.v8.yaml` which uses `misc/article.v4.yaml`
* added support for `application/vnd.elife.article-vor+json;version=8`
* added support for `application/vnd.elife.article-poa+json;version=4`

### Changed

* `recipients` no longer a required field in new file `misc/funding.v2.yaml`, compared to `misc/funding.v1.yaml`
* changed status to deprecated for `application/vnd.elife.article-vor+json;version=7`
* changed status to deprecated for `application/vnd.elife.article-poa+json;version=3`

### Removed

* removed `model/article-poa.v2.yaml`
* removed `model/article-vor.v6.yaml`
* removed support for `application/vnd.elife.article-poa+json;version=2`
* removed support for `application/vnd.elife.article-poa+json;version=6`

## 2.27.0

### Added

* added support for `dateRanged` in `application/vnd.elife.reviewed-preprint-list+json;version=1`

## 2.26.0

### Added

* added experimental support for reviewed preprints in `application/vnd.elife.recommendations+json;version=3`

### Removed

* removed support for `application/vnd.elife.recommendations+json;version=1`

## 2.25.0

### Changed

* changed status to deprecated for `application/vnd.elife.blog-article+json;version=1`
* changed status to deprecated for `application/vnd.elife.collection+json;version=2`
* changed status to deprecated for `application/vnd.elife.event+json;version=1`
* changed status to deprecated for `application/vnd.elife.highlight-list+json;version=2`
* changed status to deprecated for `application/vnd.elife.interview+json;version=1`
* changed status to deprecated for `application/vnd.elife.labs-post+json;version=1`
* changed status to deprecated for `application/vnd.elife.promotional-collection+json;version=1`
* changed status to deprecated for `application/vnd.elife.recommendations+json;version=1`
* changed status to deprecated for `application/vnd.elife.search+json;version=1`

### Removed

* removed support for `application/vnd.elife.highlight-list+json;version=1`
* removed experimental flag from `/annotations`
* removed experimental flag from `application/vnd.elife.blog-article+json;version=2`
* removed experimental flag from `application/vnd.elife.event+json;version=2`
* removed experimental flag from `application/vnd.elife.highlight-list+json;version=3`
* removed experimental flag from `application/vnd.elife.interview+json;version=2`
* removed experimental flag from `/job-adverts`
* removed experimental flag from `application/vnd.elife.labs-post+json;version=2`
* removed experimental flag from `/profiles`
* removed experimental flag from `/promotional-collections`
* removed experimental flag from `application/vnd.elife.recommendations+json;version=2`
* removed experimental flag from `/reviewed-preprints`
* removed experimental flag from `application/vnd.elife.search+json;version=2`

## 2.24.0

### Added

* added experimental support for reviewed preprints in `application/vnd.elife.promotional-collection+json;version=2`

## 2.23.0

### Added

* added experimental support for reviewed preprints in `application/vnd.elife.collection+json;version=3`
* added experimental support for reviewed preprints in `application/vnd.elife.article-related+json;version=2`

### Removed

* removed support for `application/vnd.elife.collection+json;version=1`
* removed experimental flag from `application/vnd.elife.collection+json;version=2`

## 2.22.0

### Added

* added optional doiVersion to article-vor
* add .nvmrc for development

## 2.21.0

### Changed

* introduce deprecated flag to `application/vnd.elife.press-package+json;version=3`

### Removed

* removed support for `application/vnd.elife.press-package+json;version=2`
* removed experimental flag from `application/vnd.elife.press-package+json;version=4`

## 2.20.0

### Removed

* remove copyright from article snippet in article history sample

## 2.19.0

### Removed

* remove indexContent from snippet of reviewed preprint on press pack related content sample

## 2.18.0

### Added

* add experimental support for reviewed preprints in press packages in `application/vnd.elife.press-package+json;version=4`

### Changed

* introduce deprecated flag to `application/vnd.elife.press-package+json;version=2`

### Removed

* removed support for `application/vnd.elife.press-package+json;version=1`
* removed experimental flag from `application/vnd.elife.press-package+json;version=3`

## 2.17.0

### Added

* introduce optional `sentForReview` date to article history

## 2.16.0

### Changed

* removed experimental flag from `application/vnd.elife.article-vor+json;version=7`
* added deprecated flag to `application/vnd.elife.article-vor+json;version=6`

## 2.15.0

### Added

* add support for reviewed preprints, press packages and events in covers

## 2.14.0

### Added

* introduce a new version to article-vor `application/vnd.elife.article-vor+json;version=7`
    - version 7 article-vor responses may contain elifeAssessment, recommendationsForAuthors and publicReviews
    - expanded the dependencies to expect any of the following if authorResponse is present:
        - decisionLetter
        - editorEvaluation
        - elifeAssessment
        - recommendationsForAuthors
        - publicReviews

### Removed

* removed support for deprecated `application/vnd.elife.article-vor+json;version=5`

## 2.13.0

### Changed

* Remove unnecessary fields from covers-list samples

## 2.12.0

### Changed

* include more examples of sample content in cover list

## 2.11.0

### Added

* introduce optional impactStatement for covers

## 2.10.0

### Added

* introduce optional versionDate for reviewed preprints

## 2.9.0

### Added

* reinstate samples that include new properties for VOR that were PRC

## 2.8.0

### Changed

* temporarily remove samples that include new properties, to aid transition

## 2.7.0

### Changed

* remove indexContent from reviewed preprint list samples

## 2.6.0

### Added

* new reviewed preprints endpoint defined

### Changed

* support reviewed preprints in search results

## 2.5.0

### Changed

* rename `uri` property to `scietyUri` in an `editorEvaluation`

## 2.4.0

### Changed

* extend person type to include ethics-committee option

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
