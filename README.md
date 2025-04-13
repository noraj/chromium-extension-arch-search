# ArchLinux Search

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/noraj/firefox-extension-arch-search)
![License](https://img.shields.io/github/license/noraj/firefox-extension-arch-search)

> [!IMPORTANT]
> TODO: add Chrome web store badge + image/gif/video demo

A Chromium-based browser extension that adds ArchLinux (bug tracker, forum, packages, wiki, AUR, man pages, security
advisories, PKGBUILD) as a search engine with an [Omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) keyword.

Available search engines:

name                                | shortcut   | stricness   | description                                                            | search example
------------------------------------|------------|-------------|------------------------------------------------------------------------|---------------
ArchLinux Packages                  | `pkgs`     | lax         | Search for official ArchLinux packages                                 | `al` + <kbd>Space\|Tab</kbd> + `pkgs;linux-zen`
ArchLinux Wiki                      | `wiki`     | lax         | Search a term on ArchLinux Wiki                                        | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux User Repository (AUR)     | `aur`      | lax         | Search for AUR packages                                                | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Bugtracker (one package)  | `bugs`     | exact match | List all issues for the requested package                              | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Bugtracker (global)       | `bugsg`    | lax         | Search a term among all packages' issues                               | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Manual Page               | `man`      | lax         | Search ArchLinux munual pages                                          | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Vulnerabilities (package) | `vuln`     | exact match | List security vulnerabilities for the requested package                | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux PKGBUILD                  | `pkgbuild` | exact match | Display the PKGBUILD (from ArchLinux Gitlab) for the requested package | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Gitlab project            | `proj`     | lax         | Search for ArchLinux packages' project on Gitlab                       | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Code                      | `code`     | lax         | Search a term in the code of ArchLinux packages' source                | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Forum (by author)         | `foruma`   | lax         | Search ArchLinux forum post by author pseudonym                        | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux Forum (by keywords)       | `forumk`   | lax         | Search ArchLinux forum post by keyword                                 | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux CVE                       | `cve`      | exact match | Go to a CVE id page impacting ArchLinux                                | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux AVG                       | `avg`      | exact match | Go to an AVG (ArchLinux Vulnerability Group) id page                   | `al` + <kbd>Space\|Tab</kbd> + `;`
ArchLinux ASA                       | `asa`      | exact match | Go to an ASA (ArchLinux Security Advisory) id page                     | `al` + <kbd>Space\|Tab</kbd> + `;`

> [!IMPORTANT]
> TODO: explain lax vs exact match + add examples

## Install

> [!IMPORTANT]
> TODO: Chrome Web Strore + local

## Compatibility

> [!IMPORTANT]
> TODO: check with several browsers (Google Chrome, Chromium, Vivaldi, Opera, Brave)

## FAQ

> [!IMPORTANT]
> TODO: answer questions

- Why one Omnibus keyword + search prefix instead of multiple keywords?
