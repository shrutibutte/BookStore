import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="blockcode bg-light">
        <footer class="shadow">
          <div
            class="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
            style={{width: "80%"}}
          >
            <a href="/#" class="d-flex align-items-center p-0 text-light">
              <img alt="logo" src="../img/logo.png" width="30px" />
              <span class="ms-4 h5 font-weight-bold">Devwares</span>
            </a>
            <small>&copy; Devwares, 2020. All rights reserved.</small>
            <div>
              <button class="btn btn-dark btn-flat p-2">
                <i class="fa fa-facebook"></i>
              </button>
              <button class="btn btn-dark btn-flat p-2">
                <i class="fa fa-twitter"></i>
              </button>
              <button class="btn btn-dark btn-flat p-2">
                <i class="fa fa-instagram"></i>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
