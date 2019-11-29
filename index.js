const core = require('@actions/core');
const github = require('@actions/github');
const { execFileSync } = require('child_process');

try {
    var gitVersionExec = core.getInput('path-to-gitversion');
    console.log('Executing gitversion json  %s', gitVersionExec);
  
    var json = JSON.parse(execFileSync(gitVersionExec, ['/output', 'json']));
  
    core.setOutput('Major', json.Major);
    core.setOutput('Minor', json.Minor);
    core.setOutput('Patch', json.Patch);
    core.setOutput('PreReleaseTag', json.PreReleaseTag);
    core.setOutput('PreReleaseTagWithDash', json.PreReleaseTagWithDash);
    core.setOutput('PreReleaseLabel', json.PreReleaseLabel);
    core.setOutput('PreReleaseNumber', json.PreReleaseNumber);
    core.setOutput('WeightedPreReleaseNumber', json.WeightedPreReleaseNumber);
    core.setOutput('BuildMetaData', json.BuildMetaData);
    core.setOutput('BuildMetaDataPadded', json.BuildMetaDataPadded);
    core.setOutput('FullBuildMetaData', json.FullBuildMetaData);
    core.setOutput('MajorMinorPatch', json.MajorMinorPatch);
    core.setOutput('SemVer', json.SemVer);
    core.setOutput('LegacySemVer', json.LegacySemVer);
    core.setOutput('LegacySemVerPadded', json.LegacySemVerPadded);
    core.setOutput('AssemblySemVer', json.AssemblySemVer);
    core.setOutput('AssemblySemFileVer', json.AssemblySemFileVer);
    core.setOutput('FullSemVer', json.FullSemVer);
    core.setOutput('InformationalVersion', json.InformationalVersion);
    core.setOutput('BranchName', json.BranchName);
    core.setOutput('Sha', json.Sha);
    core.setOutput('ShortSha', json.ShortSha);
    core.setOutput('NuGetVersionV2', json.NuGetVersionV2);
    core.setOutput('NuGetVersion', json.NuGetVersion);
    core.setOutput('NuGetPreReleaseTagV2', json.NuGetPreReleaseTagV2);

} catch(error) {
    core.setFailed(error.message);
}