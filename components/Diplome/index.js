import Link from 'next/link';
import Title from '../common/Title';
import Timer from '../common/Timer';
import CallMeFormWithTimer from '../common/CallMeFormWithTimer'

import NavRow from '../common/NavRow';
import MessBlock from '../common/MessagersBlock';
import InfoBlock from '../common/InfoBlock';
import ProfitsBlockSlider from '../common/ProfitsBlockSlider';
import ReviewBlockSlider from '../common/ReviewBlockSlider';
import ImageBlock from '../common/ImageBlock';
import VideoBlock from '../common/VideoBlock';
import OrderForm from '../common/OrderForm';
import Work from '../common/Work';
import Service from '../common/Service';
import LinksBlock from '../common/LinksBlock';

import infoBlockConfig from '../config/infoBlockConfig'
import reviewBlockConfig from '../config/reviewBlockConfig'
import { profitBlockConfigShort, profitBlockConfigLong } from '../config/profitBlockConfig';
import { formConfig, formConfigSecond } from '../config/formConfig'
import links from '../config/linksBlockConfig'
import contactImageSrc from '../../img/contacts/1.jpg';
import aboutImageSrc from '../../img/about/1.jpg';
import courseImageSrc from '../../img/candidate/1.jpg'
import courseImageSrc2 from '../../img/candidate/2.jpg'

const Index = () => (
    <div>
        <Title name="Дипломная диссертация" />
        <section className="block-nav">
            <NavRow action="Оценить работу" url='#' />
        </section>
        <MessBlock />
        <InfoBlock infoBlockConfig={infoBlockConfig} />
        <section className="block-form3">
            <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

            <CallMeFormWithTimer timerSize={1.6} />
        </section>
        <ProfitsBlockSlider profitBlockConfig={profitBlockConfigLong} />
        <OrderForm title="Оценить работу" formConfig={formConfigSecond} form2={true} />
        <ImageBlock imageSrc={courseImageSrc2} />
        <section class="block-text">
            <h2 class="block-text__title">
                Дипломная работа на заказ
			</h2>
            <p class="block-text__par">
                Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
			</p>
            <p class="block-text__par">
                Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
			</p>
            <p class="block-text__par">
                Планируете заказать диплом в Москве с выгодным предложением в соотношении цены и качества?
			</p>
            <p class="block-text__par">
                Наша компания BeSmarter! на протяжении многих лет специализируется на изготовлении студенческих, контрольных и научных работ.
			</p>
            <p class="block-text__par">
                Наши профессионалы с удовольствием возьмутся за разработку темы любой сложности и специфики.
			</p>
            <p class="block-text__par">
                Дипломная работа на заказ разрабатывается на основании большого количества литературных сведений, а также практической базе и реальных исследований на действующих предприятиях соответствующего направления.
			</p>
            <p class="block-text__par">
                Вы платите деньги исключительно за положительный результат, поэтому сотрудники общаются с вами вплоть до момента успешной защиты.
			</p>
        </section>
        <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
        <section class="block-text">
            <h2 class="block-text__title">
                Почему стоит заказать диплом именно у нас?
			</h2>
            <ul class="block-text__list2">
                <li>
                    У нас работают исключительно высококвалифицированные специалисты с многолетним опытом работы и соответствующим образованием.
				</li>
                <li>
                    Диплом на заказ изготавливается в максимально короткий срок, чтобы вы успели с ним подробно ознакомиться, внести свои замечания и коррективы, а также успешно подготовиться к предстоящей защите.
				</li>
                <li>
                    Мы работаем более 10 лет, за которые успели создать себе положительную репутацию, основывающуюся на реальных отзывах наших посетителей и непрерывном потоке удовлетворенных клиентов.
				</li>
                <li>
                    Вы можете заказать дипломную работу в Москве одним из наиболее удобных для вас способов: в телефонном режиме, через специальную онлайн-форму или при личной встрече в удобно расположенном офисе.
				</li>
                <li>
                    Все работы являются уникальными, содержат в себе исключительно современные сведения, реальные факты, имеют теоретическую и практическую подоплеку.
				</li>
            </ul>
        </section>
        <section className="block-form4">
            <div className="inner">
                <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                <CallMeFormWithTimer timerSize={1.6} />
            </div>
        </section>
        <section class="block-text">
            <h2 class="block-text__title">
                Как проходит заказ диплома?
			</h2>
            <p class="block-text__par">Для начала вам необходимо связаться с нашими менеджерами по одному из указанных номеров телефона, либо заполнить онлайн-форму.</p>

            <p class="block-text__par">Наши консультанты с удовольствием ответят на все возникающие у вас вопросы, помогут определиться с выбором темы, обсудят с вами детальные подробности и нюансы предстоящей работы, и заключают соответствующий договор, имеющий официальную юридическую силу.</p>

            <p class="block-text__par">Для того, чтобы вы могли вживую пообщаться с авторами, которые пишут дипломные работы на заказ в городе Москва, открыт комфортабельный офис, расположенный в центре столицы</p>
        </section>
        <VideoBlock />

        <section class="block-text">
            <h2 class="block-text__title">
                Заказать дипломную работу в Москве - реальность, а не мечта!
			</h2>
            <p class="block-text__par">Мы придерживаемся оптимальной ценовой политики, что позволяет сделать заказ дипломов без существенных финансовых потерь.</p>

            <p class="block-text__par">При постоянном сотрудничестве с нашими специалистами вы можете рассчитывать на существенную скидку.</p>

            <p class="block-text__par">Заказ дипломной работы является абсолютно анонимным, поэтому вы можете не беспокоиться о том, что ваше обращение в нашу фирму скажется на отношении преподавателей к вашей защите.</p>

            <p class="block-text__par">Диплом на заказ в Москве в компании BeSmarter – это отличный вариант успешно защитить свой диплом!</p>
        </section>
        
        
        <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig} />
        <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig} />
        <section className="block-service diplom-work-serv">
            <Work url="diplome" workName="Дипломная работа" workDescription="Поможем написать дипломную работу на заказ" cost="от 1 500 ₽" time="от 1 дня" />
            <div className="block-service__list list-big">
                <Service serviceName="Презентация" />
                <Service serviceName="Диплом" cost="от 2 500 ₽" />
                <Service serviceName="Диплом МВА" cost="от 4 500 ₽" time="от 2 недель" />
            </div>
        </section>
        <LinksBlock links={links} />
    </div>
)

export default Index;