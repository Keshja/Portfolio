module.exports = {
    name: "Web Design Portfolio",
    email: "silanbaycu@gmail.com",
    phoneForTel: "+49 1 63 797 0 393",
    phoneFormatted: "(+49) 163 797 0 393",
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
