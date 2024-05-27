import styles from './header_profile.css';
import photo from './../../assets/images/photo.jpeg';
import logout_img from './../../assets/images/logout.svg';
import {navigateTo} from '../../Router';

export function header_profile() {
    const html = `
    <header class="${styles.header}">
        <div id="${styles.img_home}"><img src="${photo}"  alt=""></div>
        <div id="${styles.welcome}">
            <h1>BIENVENIDO(A)</h1>
            <h2 id="name_id"></h2>
        </div>
        <div class="${styles.logout}" id="btn_logout"><img src="${logout_img}" alt=""></div>
    </header> 
    `;
    
    const logic = () => {
        const button = document.getElementById('btn_logout')
        button.addEventListener('click', ()=> {
            localStorage.clear();
            navigateTo('/home');
        });

        
        fetch(`http://localhost:3000/users/${localStorage.getItem("id")}`, {
        
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('NO responde');
            }
            return response.json(); 
        })
        .then(data => {
            
            document.getElementById('name_id').textContent = data.username
            
            
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }

    return { html, logic }

}
