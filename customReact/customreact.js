function customRender(reactElemnent,mainContainer){
//big way 
// const domEl=document.createElement(reactElemnent.type);
// domEl.innerHTML= reactElemnent.children
// domEl.setAttribute('href',reactElemnent.props.href);
// domEl.setAttribute('target',reactElemnent.props.target);
// mainContainer.appendChild(domEl);


//short way

const domEl=document.createElement(reactElemnent.type);
domEl.innerHTML=reactElemnent.children;
for (const prop in reactElemnent.props) {
    if(prop ==='children') continue;
   domEl.setAttribute(prop,reactElemnent.props[prop])

}
mainContainer.appendChild(domEl);
}

const reactElemnent= {
    type : 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to open google'
}

const mainContainer=document.querySelector("#root");

customRender(reactElemnent,mainContainer)
