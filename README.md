# ArchLinux Search

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/noraj/chromium-extension-arch-search)
![License](https://img.shields.io/github/license/noraj/chromium-extension-arch-search)

[![3M8ahOB.webp](https://iili.io/3M8ahOB.webp)](https://freeimage.host/i/3M8ahOB)

A Chromium-based browser extension that adds ArchLinux (bug tracker, forum, packages, wiki, AUR, man pages, security
advisories, PKGBUILD) as a search engine with an [Omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) keyword.

Available search engines:

name                                | shortcut   | stricness   | description                                                            | search example
------------------------------------|------------|-------------|------------------------------------------------------------------------|---------------
ArchLinux Packages                  | `pkgs`     | lax         | Search for official ArchLinux packages                                 | `al` + <kbd>Space\|Tab</kbd> + `pkgs;ruby`
ArchLinux Wiki                      | `wiki`     | lax         | Search a term on ArchLinux Wiki                                        | `al` + <kbd>Space\|Tab</kbd> + `wiki;rosetta`
ArchLinux User Repository (AUR)     | `aur`      | lax         | Search for AUR packages                                                | `al` + <kbd>Space\|Tab</kbd> + `aur;nessus`
ArchLinux Bugtracker (one package)  | `bugs`     | exact match | List all issues for the requested package                              | `al` + <kbd>Space\|Tab</kbd> + `bugs;linux-lts`
ArchLinux Bugtracker (global)       | `bugsg`    | lax         | Search a term among all packages' issues                               | `al` + <kbd>Space\|Tab</kbd> + `bugsg;displayport`
ArchLinux Manual Page               | `man`      | lax         | Search ArchLinux munual pages                                          | `al` + <kbd>Space\|Tab</kbd> + `man;tldr`
ArchLinux Vulnerabilities (package) | `vuln`     | exact match | List security vulnerabilities for the requested package                | `al` + <kbd>Space\|Tab</kbd> + `vuln;openssh`
ArchLinux PKGBUILD                  | `pkgbuild` | exact match | Display the PKGBUILD (from ArchLinux Gitlab) for the requested package | `al` + <kbd>Space\|Tab</kbd> + `pkgbuild;metasploit`
ArchLinux Gitlab project            | `proj`     | lax         | Search for ArchLinux packages' project on Gitlab                       | `al` + <kbd>Space\|Tab</kbd> + `proj;sqlmap`
ArchLinux Code                      | `code`     | lax         | Search a term in the code of ArchLinux packages' source                | `al` + <kbd>Space\|Tab</kbd> + `code;libxml`
ArchLinux Forum (by author)         | `foruma`   | lax         | Search ArchLinux forum post by author pseudonym                        | `al` + <kbd>Space\|Tab</kbd> + `foruma;noraj2`
ArchLinux Forum (by keywords)       | `forumk`   | lax         | Search ArchLinux forum post by keyword                                 | `al` + <kbd>Space\|Tab</kbd> + `forumk;MST`
ArchLinux CVE                       | `cve`      | exact match | Go to a CVE id page impacting ArchLinux                                | `al` + <kbd>Space\|Tab</kbd> + `cve;CVE-2021-38371`
ArchLinux AVG                       | `avg`      | exact match | Go to an AVG (ArchLinux Vulnerability Group) id page                   | `al` + <kbd>Space\|Tab</kbd> + `avg;AVG-2843`
ArchLinux ASA                       | `asa`      | exact match | Go to an ASA (ArchLinux Security Advisory) id page                     | `al` + <kbd>Space\|Tab</kbd> + `asa;ASA-202403-1`

Stricness legend:

- `lax`: means it will perform a real search so you can use incomplete terms or use several keywords
- `exact match`: mean no search is performed, you'll be sent to the correct page only if you provide the correct term (package name, ID, etc.)

## Install

## Microsoft Edge Add-ons

[![Microsoft Edge Add-ons version](https://img.shields.io/badge/dynamic/json?label=MEA%20version&query=%24.version&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/pboknbkpagalhkenljledjiagddojbeg)](https://microsoftedge.microsoft.com/addons/detail/archlinux-moteurs-de-re/pboknbkpagalhkenljledjiagddojbeg)

## WebExtension.ORG

> [!IMPORTANT]
> TODO: Publish https://webextension.org, after publishing to official stores

## Opera Addons

> [!IMPORTANT]
> WIP: BUG-7628, parser error for the manifest.json

### Load unpacked extension

You can clone this repository (`git clone https://github.com/noraj/chromium-extension-arch-search.git`) or [download a ZIP](https://github.com/noraj/chromium-extension-arch-search/archive/refs/heads/master.zip), enable Developer mode to be able to [load the unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).

### Chrome Web Store, Windows and macOS

The extension is not available on Chrome Web Store.

For Windows and macOS, Google made it impossible to install extension from outside the [Chrome Web Store](https://chromewebstore.google.com/).

As it's an ArchLinux extension, the chances are low that a Windows or macOS user would use an extension targeting ArchLinux anyways. But if you still want to install this extension on Windows or macOS, you still have a few options:

- Load unpacked extension, as explained above
- Complain to Google and ask them an option for a third party extension marketplace
- Change your OS to a [Linux distribution](https://distrowatch.com) and enjoy the free world
- [Sponsor me](https://github.com/sponsors/noraj) so I can can pay Google Developer fees and publish on Chrome Web Store
- Some Chrome-based browsers like Microsoft Edge and Opera have their own extension marketplace, so you can download it from there

## Compatibility

Browser        | Compatible | Tested version
---------------|------------|---------------
Chromium       | ✅          | 135.0.7049.95
Google Chrome  | ✅          | 135.0.7049.95
Vivaldi        | ❌          | 7.3.3635.11
Opera          | ✅          | 118.0.5461.41
Brave          | ✅          | 1.77.100
Microsoft Edge | ✅          | 135.0.3179.85
Yandex Browser | ❌          | 25.2.1.939
Thorium        | ✅          | 130.0.6723.174
Cromite        | ✅          | 135.0.7049.100
SRWare Iron    | ✅          | 131.0.6650.1

## FAQ

- Why one Omnibus keyword + search prefix instead of multiple keywords?
  - It's not possible to register several keywords in one extension. Users don't want to install dozens of extensions (1 per website) and it would also be very hard to maintain. So the best compromise is to use this command + splitter character approach.
