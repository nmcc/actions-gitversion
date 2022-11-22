# Gitversion Action

This action runs `gitversion` executable from a local path and exposes the versioning attributes as action outputs

It assumes that there is an executable of `GitVersion` in the local repo.

## Inputs

### `path-to-gitversion`

** Required **: The path to the local `GitVersion` executable.

# Outputs

The output is aligned with [GitVersion output variables](https://gitversion.readthedocs.io/en/latest/more-info/variables/):

* Major
* Minor
* Patch
* PreReleaseTag
* PreReleaseTagWithDash
* PreReleaseLabel
* PreReleaseNumber
* WeightedPreReleaseNumber
* BuildMetaData
* BuildMetaDataPadded
* FullBuildMetaData
* MajorMinorPatch
* SemVer
* LegacySemVer
* LegacySemVerPadded
* AssemblySemVer
* AssemblySemFileVer
* FullSemVer
* InformationalVersion
* BranchName
* Sha
* ShortSha
* NuGetVersionV2
* NuGetVersion
* NuGetPreReleaseTagV2

## Example

```yaml
steps:
  - name: GitVersion
    id: gitversion
    uses: nmcc/actions-gitversion@v1
    with:
      path-to-gitversion: packages/GitVersion.CommandLine/tools/GitVersion.exe
  
  - name: Create Release
    uses: actions/create-release@v1
    with:
        tag_name: ${{ steps.gitversion.outputs.SemVer }}
  
```