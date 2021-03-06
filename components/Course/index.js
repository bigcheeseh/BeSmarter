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
        <Title name="Курсовая диссертация" />
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
        <ImageBlock imageSrc={courseImageSrc} />
        <section className="block-text">
            <h2 className="block-text__title">
                Курсовая работа на заказ.
			</h2>
            <p className="block-text__par">
                Курсовая работа – один из наиболее распространенных студенческих проектов, на которую многим студентам не хватает времени.
			</p>
            <p className="block-text__par">
                Если у Вас нет времени и возможности заниматься учебными проектами, Вас спасет курсовая работа на заказ в компании BeSmarter!
			</p>
            <p className="block-text__par">
                Решили у нас заказать курсовую работу в Москве, будьте уверены в ее уникальности и грамотности!
			</p>
            <p className="block-text__par">
                Написание курсовых работ на заказ в BeSmarter! обеспечивает Вам получение качественного результата с оптимальными данными, выполненного именно для Вас.
			</p>
        </section>
        <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
        <section className="block-text">
            <h2 className="block-text__title">
                Заказ курсовых работ в BeSmarter! – выгодно и удобно!
			</h2>
            <p className="block-text__par">
                Улучший вариант для учащихся вуза – заказ курсовой работы в BeSmarter! ведь с нами выгодно и удобно, почему?
			</p>
            <ul className="block-text__list2">
                <li>
                    С нами работают опытные авторы-профессионалы, которые выполнят курсовые работы любой сложности в соответствии со всеми требованиями Вашего вуза.
				</li>
                <li>
                    Написать курсовую работу на заказ у нас – это стать обладателем уникального проекта, владельцем которого будете исключительно Вы!
				</li>
                <li>
                    У Вас есть возможность сделать заказ курсовой работы срочно – весь период ее выполнения займет не больше одного дня.
				</li>
                <li>
                    Наше сопровождение непосредственно до успешной защиты курсовой работы.
				</li>
                <li>
                    Авторы компании BeSmarter! выполняют курсовые работы на заказ в гуманитарных, технических и других направлениях.
				</li>
            </ul>
        </section>

        <VideoBlock />

        <section className="block-text">
            <h2 className="block-text__title">
                От чего зависит цена написания курсовой работы на заказ
			</h2>
            <p className="block-text__par">За умеренную оплату у нас каждый может сделать курсовую работу на заказ, а также получить необходимые материалы и пояснения для дальнейшей защиты проекта.</p>

            <p className="block-text__par">Написать курсовую на заказ, цена которой приемлема для студента – одно из правил BeSmarter!</p>

            <p className="block-text__par">От чего же зависит цена курсовой работы?</p>

            <p className="block-text__subtitle">Предмета и темы</p>
            <p className="block-text__par">Курсовые на заказ по гуманитарным, экономическим и естественнонаучным дисциплинам дешевле, чем сложный технический проект. Чем проще и легче предмет и тема, тем меньше стоимость курсовой работы.</p>

            <p className="block-text__subtitle">Сроков написания</p>
            <p className="block-text__par">Конечно, мы сможем написать курсовую работу срочно даже за один день, но при этом цена курсовой работы будет выше.</p>

            <p className="block-text__subtitle">Количества работ</p>
            <p className="block-text__par">Курсовая работа не бывает одна. Ведь в сессию надо сдать кучу зачетов, курсовых, экзаменов и тестов. Заказывайте сразу несколько работ и получайте скидки!</p>

            <p className="block-text__par">Лучше всего заказать курсовую работу вместе с одногруппниками: это не только веселее, но и выгоднее!</p>
        </section>
        <section className="block-form4">
            <div className="inner">
                <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                <CallMeFormWithTimer timerSize={1.6} />
            </div>
        </section>
        <section className="block-text">
            <h2 className="block-text__title">
                Купить курсовую работу в Москве
			</h2>
            <p className="block-text__par"> Хотите купить курсовую работу в Москве?</p>

            <p className="block-text__par">Приезжайте к нам в офис. Наши менеджеры с удовольствием встретятся с Вами, расскажут все про написание курсовых работ на заказ и помогут оформить заказ курсовой работы.</p>

            <p className="block-text__par">Заказ курсовых работ в офисе гораздо комфортнее заказа онлайн или по телефону.</p>

            <p className="block-text__par">С помощью менеджера легче оформить заказ, обговорить сроки, посмотреть образцы презентаций и увезти с собой распечатанную и переплетенную готовую курсовую работу.</p>

            <p className="block-text__par">Приезжайте в офис сегодня – это правильно и удобно!</p>
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