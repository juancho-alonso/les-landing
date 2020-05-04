function navigate(id) {
    const dataId = id.getAttribute("data-id");
    //document.getElementById(dataId).scrollIntoView({behavior: 'smooth'});
    document.getElementById(dataId).scrollTop -= 10;
    
};

