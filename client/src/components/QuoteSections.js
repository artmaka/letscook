import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection() {
    return (
        <div className="section quote">
            <p className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Истинная кулинария не для робких. Наберитесь отваги, пробуйте, экспериментируйте. Не позволяйте никому загонять вас в рамки. Единственные ваши рамки — ваша душа. Это правда: готовить может каждый, но лишь бесстрашные достигают величия
            </p>
            <p className="quote-author">- Рататуй</p>
        </div>
    )
}
