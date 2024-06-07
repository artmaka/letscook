export default function RecipeHeader() {
    return (
        <div className="content-box__content">
            <div className="recipe-header">
                <h1 className="recipe-header__name">Брауни</h1>
            </div>
            <div className="plain-text">
                <div className="media-content">
                    <img src="/img/recipe-img/img_11.jpg" alt="брауни"></img>
                </div>
                <DescriptionBlock />
            </div>
        </div>
    );
}

function DescriptionBlock() {
    return (
        <div id="description">
            <div className="recipe-author-block" data-module="scroll-to">
                <a className="person" href="/profile" rel="nofollow">
                    <div className="person__content">
                        <div className="person__name" itemprop="author">
                            <div itemprop="name">artmako</div>
                        </div>
                        <time className="person__post-time" datetime="01.05.2024 19:56:18">01 мая 2024</time>
                    </div>
                </a>
                <h2 className="section-title">ОПИСАНИЕ</h2>
                <div className="recipe_description" itemprop="description">
                    <p>Один из самых популярных десертов в мире — брауни. У традиционных шоколадных брауни ванильный аромат, хрустящая корочка и влажная серединка. В торт также добавляют грецкие орехи или фисташки, а еще клюкву.</p>
                </div>
            </div>
        </div>
    );
}