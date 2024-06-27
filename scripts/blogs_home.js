let dataBlog = ``;
let socialContact = ``;

socials.forEach((social) => {
  socialContact += ` <ul class="socila-links-lists">
            <li>
              <a href="${social.link.link_1}" target="_blank"
                >${social.social_icons.social_icon_1}</a>
            </li>
            <li>
              <a href="${social.link.link_2}" target="_blank"
                >${social.social_icons.social_icon_2}</a>
            </li>
            <li>
              <a href="${social.link.link_3}" target="_blank"
                >${social.social_icons.social_icon_3}</a>
            </li>
            <li>
              <a href="mailto:${social.link.link_4}">${social.social_icons.social_icon_4}</ion-icon></a>
            </li>
          </ul>`;
});

const contact = document.querySelector(".js-social-links");
contact.innerHTML = socialContact;

blogs.forEach((blog) => {
  dataBlog += `
      <div id="blog-post">
        <h1 class="blog-post-h1">${blog.title}</h1>
        <h6 class="blog-post-h6">${blog.date}</h6>
        <p class="blog-post-p">
          ${blog.content}
        </p>

        <a class="blog-post-btn" href="${blog.btnLink}"
        >Continue Reading &rarr;</a>

        <hr />
      </div>`;

});

document.querySelector(".js-blog-post").innerHTML = dataBlog;
