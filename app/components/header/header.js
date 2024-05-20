import styles from './header.css';
export async function header() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
    <header class="${styles.header}">
    <div id="${styles.imghome}"><img src=""  alt=""></div>
    <div id="${styles.welcome}">
        <h1>BIENVENIDO</h1>
        <h3>Juan Sebastian</h3>
    </div>
    </header>
    `;
}