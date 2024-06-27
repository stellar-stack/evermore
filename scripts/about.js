let socialContact = ``;
socials.forEach((social) => {
    socialContact += `
    
    <ul class="socila-links-lists">
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
              <a href="${social.link.link_4}" target="_blank">${social.social_icons.social_icon_4}</a>
            </li>
          </ul>
    
    `
  });
  
  const contact = document.querySelector(".js-social-links");
  contact.innerHTML = socialContact;