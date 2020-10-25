import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light-grey text-center">
        <p>
          @{date} Asjad Baig.All right Reserved | terms and conditions applied
        </p>
      </footer>
    </>
  );
};

export default Footer;
