(function () {
  const repo = "lesariaristes/wiki-dev";
  const branch = "main";

  function formatDate(value) {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Paris"
    }).format(new Date(value));
  }

  async function getLatestCommit(path) {
    const url = `https://api.github.com/repos/${repo}/commits?sha=${branch}&path=${encodeURIComponent(path)}&per_page=1`;
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) {
      return null;
    }

    const commits = await response.json();
    return commits && commits.length ? commits[0] : null;
  }

  function sourcePathFromTarget(target) {
    const pagePath = target.dataset.pagePath;

    if (pagePath && pagePath.trim() !== "") {
      return `docs/${pagePath.replace(/^\/+/, "")}`;
    }

    let path = decodeURIComponent(window.location.pathname || "/");
    path = path.replace(/\/+$/, "").replace(/^\/+/, "");

    if (path === "" || path === "docs") {
      return "docs/index.md";
    }

    if (path.startsWith("docs/")) {
      path = path.substring("docs/".length);
    }

    return `docs/${path}.md`;
  }

  async function render() {
    const target = document.getElementById("last-modified-page");

    if (!target) {
      return;
    }

    const sourcePath = sourcePathFromTarget(target);
    const commit = await getLatestCommit(sourcePath);

    if (!commit) {
      target.textContent = "Dernière modification indisponible";
      return;
    }

    const date = commit.commit?.committer?.date || commit.commit?.author?.date;
    const author = commit.author?.login || commit.commit?.author?.name || commit.committer?.login || commit.commit?.committer?.name || "inconnu";

    if (!date) {
      target.textContent = "Dernière modification indisponible";
      return;
    }

    target.textContent = `Dernière modification le ${formatDate(date)} par ${author}`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      render().catch(function () {
        const target = document.getElementById("last-modified-page");
        if (target) {
          target.textContent = "Dernière modification indisponible";
        }
      });
    });
  } else {
    render().catch(function () {
      const target = document.getElementById("last-modified-page");
      if (target) {
        target.textContent = "Dernière modification indisponible";
      }
    });
  }
})();
