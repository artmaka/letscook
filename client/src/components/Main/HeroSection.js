import CustomImage from "./CustomImage";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const images = [
        "/img/img_1.jpg",
        "/img/img_2.jpg",
        "/img/img_3.jpg",
        "/img/img_4.jpg",
        "/img/img_5.jpg",
        "/img/img_6.jpg",
        "/img/img_7.jpg",
        "/img/img_8.jpg",
        "/img/img_9.jpg",
    ];

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/all-recipes");
    };

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Попробуй новый спектр вкуса вместе с Let's Cook! </h1>
                <p className="info">От завтрака до ужина - на Let's Cook! вы найдете все, что пожелает ваш желудок. Регистрируйся, чтобы добавлять свои уникальные рецепты и оставлять комментарии. Хорошей готовки!</p>
                <button className="btn" onClick={handleNavigate}>К рецептам!</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"85%"} />
                ))}
            </div>
        </div>
    );
}
