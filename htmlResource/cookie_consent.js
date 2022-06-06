! function (e) {
    if (e.cookieBar) return e.cookieBar;

    var
        doc = e.document,
        createCookie = function () {
            function addCookiePanel(titleText, paragraphText, linkText, linkAddress, buttonText) {                
                var fragment = doc.createDocumentFragment();
                var container = document.createElement("div");
                container.id = "cookieAcceptInfo";
                container.className = "cookieBar";

                var title = document.createElement("h3");
                title.innerText = titleText;
                container.appendChild(title);

                var para = document.createElement("p");
                addLinkToText(para, paragraphText, linkText, linkAddress);
                container.appendChild(para);

                var button = document.createElement("div");
                button.className = "cookieBarButtons";
                var link = document.createElement("a");
                link.id = "cookieAcceptButton";
                link.className = "cookieBarOk";
                link.addEventListener("click", function (e) {
                    $("#cookieAcceptInfo").fadeOut(400);
                    setCookie("cp_cookie_consent", true, 10000);
                });
                link.href = "javascript:void(0)";
                link.innerHTML = buttonText;
                button.appendChild(link);
                container.appendChild(button);

                fragment.appendChild(container);
                doc.body.appendChild(fragment);
            }
            var Cookie = {
                showCookieBar: function (title, text, linkText, linkAddress, buttonText) {
                    if (!getCookie("cp_cookie_consent")) {
                        doc.addEventListener ? doc.addEventListener("DOMContentLoaded", function (doc) {
                            addCookiePanel(title, text, linkText, linkAddress, buttonText)
                        }) : doc.attachEvent("onreadystatechange", function (doc) {
                            addCookiePanel(title, text, linkText, linkAddress, buttonText)
                        })
                    }
                }
            };
            return Cookie;
            
    }();
    
    e.cookieBar = createCookie
}(this);