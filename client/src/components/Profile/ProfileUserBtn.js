import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
export default function ProfileUserBtn({ }) {
    const navigate = useNavigate();

    const handleCreateRecipeClick = () => {
        navigate('/create-recipe');
    };

    const handleRecipeClick = () => {
        navigate('/all-recipes');
    };
    
    return (
        <div className='form'>
            <div className="section hero">
            <div className="user-info">
                <div className="gallery">
                </div>
                <div className="user-details">
                    <h1>Профиль</h1>
                    <p><strong>Username:</strong> artmako</p>
                    <p><strong>Email:</strong> pupupu@gmail.com</p>
                    <p><strong>Role:</strong> user</p>
                </div>
            </div>
            <div className="user-actions">
                <button onClick={handleRecipeClick}>Мои рецепты</button>
                <button onClick={handleCreateRecipeClick}>Создать рецепт</button>
                <button>Комментарии</button>
                <button>Выйти из аккаунта</button>
            </div>
        </div>
        </div>
    );
}
