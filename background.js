chrome.omnibox.onInputEntered.addListener(async function (text) {
  // All search engines
  const engines = {
    'asa': {
      name: 'ArchLinux ASA',
      search_url: 'https://security.archlinux.org/{searchTerms}/generate'
    },
    'aur': {
      name: 'ArchLinux User Repository (AUR)',
      search_url: 'https://aur.archlinux.org/packages?K={searchTerms}'
    },
    'avg': {
      name: 'ArchLinux AVG',
      search_url: 'https://security.archlinux.org/{searchTerms}'
    },
    'bugs': {
      name: 'ArchLinux Bugtracker (one package)',
      search_url: 'https://gitlab.archlinux.org/archlinux/packaging/packages/{searchTerms}/-/issues'
    },
    'bugsg': {
      name: 'ArchLinux Bugtracker (global)',
      search_url: 'https://gitlab.archlinux.org/groups/archlinux/packaging/packages/-/issues/?search={searchTerms}'
    },
    'code': {
      name: 'ArchLinux Code',
      search_url: 'https://gitlab.archlinux.org/search?group_id=11323&scope=blobs&search={searchTerms}'
    },
    'cve': {
      name: 'ArchLinux CVE',
      search_url: 'https://security.archlinux.org/{searchTerms}'
    },
    'foruma': {
      name: 'ArchLinux Forum (author)',
      search_url: 'https://bbs.archlinux.org/search.php?author={searchTerms}&search_in=0&sort_by=0&sort_dir=DESC&show_as=posts&action=search'
    },
    'forumk': {
      name: 'ArchLinux Forum (keywords)',
      search_url: 'https://bbs.archlinux.org/search.php?keywords={searchTerms}&search_in=0&sort_by=0&sort_dir=DESC&show_as=topics&action=search'
    },
    'man': {
      name: 'ArchLinux manual pages',
      search_url: 'https://man.archlinux.org/search?q={searchTerms}'
    },
    'pkgbuild': {
      name: 'ArchLinux PKGBUILD',
      search_url: 'https://gitlab.archlinux.org/archlinux/packaging/packages/{searchTerms}/-/blob/main/PKGBUILD?ref_type=heads'
    },
    'pkgs': {
      name: 'ArchLinux Packages',
      search_url: 'https://www.archlinux.org/packages/?q={searchTerms}'
    },
    'proj': {
      name: 'ArchLinux Gitlab project',
      search_url: 'https://gitlab.archlinux.org/search?group_id=11323&search={searchTerms}'
    },
    'vuln': {
      name: 'ArchLinux Vulnerabilities (package)',
      search_url: 'https://security.archlinux.org/package/{searchTerms}'
    },
    'wiki': {
      name: 'ArchLinux Wiki',
      search_url: 'https://wiki.archlinux.org/index.php?search={searchTerms}'
    }
  }

  // Do not use native split() because we want to split only over the first ";"
  function splitOnce(input, splitter) {
    const i = input.indexOf(splitter);
    if (i === -1) {
      return [input];
    }

    const splits = [input.slice(0,i), input.slice(i+1)];
    return splits;
  }

  const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true,
  });

  // identify if there is a command
  search_params = splitOnce(text, ';');
  var command = '';
  var search_input = '';
  if (search_params.length === 1) { // no command, use pkgs by default
    command = 'pkgs';
    search_input = search_params[0];
  } else {
    command = search_params[0];
    search_input = search_params[1];
  }

  // use the right search engine
  if (engines[command]) {
    chrome.tabs.update(tabs[0].id, {
      url: engines[command].search_url.replace('{searchTerms}', encodeURIComponent(search_input))
    });
  } else {
    chrome.tabs.update(tabs[0].id, {
      url: 'https://archlinux.org/'
    });
  }
});
