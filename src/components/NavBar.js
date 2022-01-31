import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const pages = links.map((page) => (
    <a key={page} href={'#' + page}>{page}</a>
  ))
  return <nav>{pages}</nav>;
}

export default NavBar;