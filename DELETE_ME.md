# Repository Template

Hello and welcome!

This repo's template features the minimal barebones needed for a general [git](https://git-scm.com/) project to feature:

* Git attributes file;
* Git ignore file;
* [Changelog](https://keepachangelog.com/en/1.0.0/);
* [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html);
* Contributing guidelines;
* [Hippocratic License v1.2](https://firstdonoharm.dev/);
  - This template adheres to the [The Ethical Source Movement](https://ethicalsource.dev/);
* Read Me file;
* GitHub templates:
  - Issue and feature request templates;
  - Pull request templates;
* GitHub Bots' configuration.

## Bots

This template assumes you have installed and given appropriate access to these Bots:

* [Sentiment Bot](https://probot.github.io/apps/sentiment-bot/);
* [todo](https://probot.github.io/apps/todo/) bot; and
* [Welcome](https://probot.github.io/apps/welcome/) bot.

None of these, of course, are required. And, if none of them is used, their [configuration file](.github/config.yml) may be removed.

### Bot Configuration

All messages' or comments' texts are based upon [this gist](https://gist.github.com/Nereare/b976e4d9d9832f4a3541417777ad85aa). Feel free to fork it.

#### Sentiment Bot

See [its page](https://probot.github.io/apps/sentiment-bot/) for further configuration. This template sets two variables: `sentimentBotToxicityThreshold` and `sentimentBotReplyComment`. You may customize both, but stick to the latter.

#### todo bot

See [its page](https://probot.github.io/apps/todo/) for further configuration. This template sets two variables: `autoAssign` and `exclude`, which sets the user resposible for the push to be the assignee of the issue, and ignores the `.gitattributes` file from issue opening. We suggest keeping this way.

#### Welcome bot

This bot are actually three bots into one. See the central [page](https://probot.github.io/apps/welcome/) for further configuration. There are three variables, each being the message posted by the bot: `newIssueWelcomeComment`, `newPRWelcomeComment`, and `firstPRMergeComment`. You may customize these messages if you wish.

## Community Health Files

This template implements some of the possible [community health files](https://help.github.com/en/articles/creating-a-default-community-health-file-for-your-organization) supported by GitHub:

| File                             | Implemented        | File                                     | Guide |
|:--------------------------------:|:------------------:|:-----------------------------------------|:-----:|
| `CHANGELOG`                      | :heavy_check_mark: | [CHANGELOG.md](CHANGELOG.md)             | [Link](https://keepachangelog.com/) |
| `CODE-OF-CONDUCT`                | :heavy_check_mark: | [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md) | [Link](https://help.github.com/en/articles/adding-a-code-of-conduct-to-your-project/) |
| `CONTRIBUTING`                   | :heavy_check_mark: | [CONTRIBUTING.md](CONTRIBUTING.md)       | [Link](https://help.github.com/en/articles/setting-guidelines-for-repository-contributors/) |
| `FUNDING`                        | :x:                | -                                        | [Link](https://help.github.com/en/articles/displaying-a-sponsor-button-in-your-repository) |
| Issue and pull request templates | :heavy_check_mark: | [.github](.github) folder                | [Link](https://help.github.com/en/articles/about-issue-and-pull-request-templates/) |
| `LICENSE`                        | :heavy_check_mark: | [LICENSE.md](LICENSE.md)                 | [Link](https://choosealicense.com/) |
| `package.json`                   | :heavy_check_mark: | [package.json](package.json)             | - |
| `SECURITY`                       | :x:                | -                                        | [Link](https://help.github.com/en/articles/adding-a-security-policy-to-your-repository) |
| `SUPPORT`                        | :x:                | -                                        | [Link](https://help.github.com/en/articles/adding-support-resources-to-your-project/) |
| `README`                         | :heavy_check_mark: | [README.md](README.md)                   | [Link](https://help.github.com/en/articles/about-readmes) |

The template aces the [recommended community standards](https://opensource.guide/).

![Community Standards checklist](https://i.imgur.com/4pvOp7e.jpg)

## To-Do's

In order to make this repository your own, follow these steps:

- [ ] Choose a license:
  - [ ] If it is not the Hippocratic License `v1.2`: change the [license file](LICENSE.md) contents;
- [ ] Customize [bot configuration](.github/config.yml) if you wish;
- [ ] Change the names:
  - [ ] Search folder for `{{PKG_NAME}}` and replace all instances by the repository name;
  - [ ] Search folder for `{{PKG_REPO}}` and replace all instances by the repository's author and name as the format `author/package-name` (*e.g.* `Nereare/pretty-regret`);
  - [ ] Search folder for `{{PKG_DESC}}` and replace all instances by the description of the repository; and
  - [ ] Search folder for `{{PKG_YEAR}}` and replace all instances by the repository copyright years with four digits (*e.g.* `2019` or `2012-2018`);
  - [ ] Search folder for `{{PKG_VERS}}` and replace all instances by the file or files used to keep versioning, preferably as a link (*e.g.* `[package.json](package.json)`);
- [ ] On the [ReadMe file](README.md), check the version badge, which uses a `package.json` file, which is included with the template by default, to fetch the version. If this is not the method for this repository, change it accordingly;
- [ ] On the [ReadMe file](README.md), delete the line referring to this tutorial.

Now you are all set! :tada:

<!--
TODO Delete the template instructions
BODY Once you have set up the repository from the template, delete the template's [guide file](DELETE_ME.md).
-->
