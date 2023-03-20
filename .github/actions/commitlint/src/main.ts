import * as core from '@actions/core'
import {context, getOctokit} from '@actions/github'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    console.log(
      ' OH SHAZZZZAM @@@@@######################**********************'
    )

    const GITHUB_TOKEN = core.getInput('githubToken')
    console.log('INPUTTTTS')
    console.log(GITHUB_TOKEN)
    const github = getOctokit(GITHUB_TOKEN)

    const pr = context.payload.pull_request

    console.log('CONTEXT', context)

    if (!pr) {
      core.setFailed('This is not a PR')
      return
    }

    const prParams = {
      ...context.repo,
      pull_number: pr.number
    }

    const commits = await github.rest.pulls.listCommits(prParams)

    console.log('HERE BE COMMITS')
    console.log(commits)

    console.log('GETTTING PWD OUTPUT')

    console.log(await exec.getExecOutput('pwd'))
  } catch (error) {
    if (error instanceof Error) {
      console.log('ERRRRRRORRRR')
      core.setFailed(error.message)
    }
  }
}

run()
