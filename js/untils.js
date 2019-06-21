export const renderScreen = (screen) => {
    const div = document.createElement(`div`);
    div.innerHTML = screen;
    return div;
};

const main = document.querySelector(`#main`);

export const showScreen = (screen) => {
    main.innerHTML = ``;
    main.appendChild(screen);
};
