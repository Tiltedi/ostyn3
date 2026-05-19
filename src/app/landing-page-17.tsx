"use client";

import { type FC, type ReactNode } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Award01,
    Building01,
    Calendar,
    Check,
    CheckCircle,
    Clock,
    Cube01,
    Heart,
    Mail01,
    MarkerPin01,
    Phone,
    Send01,
    Star01,
    Tool01,
} from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { VideoPlayer } from "@/components/base/video-player/video-player";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const navItems = [
    { label: "Realisaties", href: "#realisaties" },
    { label: "Waarom Ostyn", href: "#waarom" },
    { label: "Hoe werkt het", href: "#proces" },
    { label: "Showroom", href: "#showroom" },
];

const OstynLogo = ({ className }: { className?: string }) => (
    <img src="/logo-text.svg" alt="Ostyn" className={cx("h-7 w-auto md:h-9", className)} />
);

const OstynHeader = () => {
    return (
        <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b border-black/10 bg-white/95 backdrop-blur md:h-20">
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div className="flex w-full items-center justify-between gap-4">
                    <a href="#" aria-label="Ostyn — startpagina" className="flex items-center">
                        <OstynLogo />
                    </a>

                    <nav aria-label="Hoofdnavigatie" className="max-md:hidden">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-black outline-focus-ring transition duration-100 hover:bg-[#F2F2F2] focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button href="#offerte" size="sm" className="max-md:hidden">
                            Offerte aanvragen
                        </Button>
                        <Button href="#offerte" size="sm" className="md:hidden">
                            Offerte
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const HeroSection = () => {
    return (
        <section className="relative bg-white pt-16 pb-12 md:pt-24 md:pb-16" aria-labelledby="hero-titel">
            <div className="mx-auto flex w-full max-w-container flex-col items-center px-4 text-center md:px-8">
                <p className="text-sm font-bold tracking-[0.18em] text-black uppercase md:text-md">
                    expand your freedom
                </p>
                <h1
                    id="hero-titel"
                    className="mt-4 max-w-4xl text-display-md font-semibold text-balance text-black md:text-display-lg lg:text-display-xl"
                >
                    Een <strong className="font-black">poolhouse op maat</strong>, in <strong className="font-black">eigen atelier</strong> gebouwd. Klaar binnen{" "}
                    <strong className="font-black">3 tot 6 maanden</strong>.
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-black md:mt-6 md:text-xl">
                    Eén team van ontwerp tot oplevering. Eén afspraak over de prijs. Eén partner die ook na de plaatsing voor u klaarstaat.
                </p>
                <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-10">
                    <Button href="#offerte" iconTrailing={ArrowRight} size="xl">
                        Vraag uw gratis offerte aan
                    </Button>
                    <Button href="#inspiratieboek" color="link-gray" size="xl" iconTrailing={ArrowUpRight} className="text-black">
                        Download het inspiratieboek
                    </Button>
                </div>
                <p className="mt-6 text-sm text-black/70 md:text-md">
                    Vrijblijvend · Antwoord binnen 2 werkdagen
                </p>
            </div>

            <div className="relative mt-12 md:mt-16">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex justify-center">
                        <VideoPlayer
                            size="lg"
                            thumbnailUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80"
                            src="https://www.untitledui.com/videos/untitled-ui-demo.mp4"
                            className="aspect-video w-full overflow-hidden rounded-2xl shadow-3xl md:max-w-240"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

type Promise = { title: string; body: string; icon: FC<{ className?: string }> };
const promises: Promise[] = [
    {
        icon: Cube01,
        title: "3D-ontwerp en offerte vooraf",
        body: "U ziet en weet wat u koopt, voor u tekent. Geen meerwerk halverwege.",
    },
    {
        icon: Building01,
        title: "Productie en plaatsing in één hand",
        body: "Onze eigen vaklui, in ons atelier in Dottenijs. Geen onderaanneming, geen tussenpartij.",
    },
    {
        icon: Heart,
        title: "Nazorg door ons SAV-team",
        body: "Bereikbaar, ook lang na de oplevering. Geen externe hotline.",
    },
];

const PromiseSection = () => {
    return (
        <section className="bg-[#F2F2F2] py-16 md:py-24" aria-labelledby="belofte-titel">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Wat u krijgt</p>
                    <h2
                        id="belofte-titel"
                        className="mt-3 text-display-sm font-semibold text-balance text-black md:text-display-md"
                    >
                        Een <strong className="font-black">premium</strong> poolhouse, op <strong className="font-black">maat</strong> van uw woning ontworpen en in <strong className="font-black">eigen atelier</strong> gebouwd.
                    </h2>
                    <p className="mt-4 text-lg text-black md:mt-5 md:text-xl">
                        Geen vijf aannemers op uw terrein. Geen ontwerper die naar een uitvoerder doorverwijst. Eén team, één
                        prijsafspraak, één verantwoordelijke partner — ook jaren na de plaatsing.
                    </p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3">
                    {promises.map((item) => (
                        <li key={item.title} className="flex flex-col items-start rounded-2xl bg-white p-6 md:p-8">
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#C19848] text-white">
                                <item.icon className="size-6" />
                            </div>
                            <h3 className="mt-5 text-lg font-bold text-black md:text-xl">{item.title}</h3>
                            <p className="mt-2 text-md text-black">{item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

type Project = {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    tag: string;
};

const projects: Project[] = [
    {
        id: "p1",
        title: "Modern minimalistisch",
        subtitle: "Afrormosia hardhout, schuifpartijen op volle hoogte, plat dak.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&h=1200&fit=crop&q=80",
        tag: "Hedendaags",
    },
    {
        id: "p2",
        title: "Klassiek silhouet",
        subtitle: "Trespa-panelen, zadeldak, geïntegreerde berging.",
        image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=900&h=1200&fit=crop&q=80",
        tag: "Klassiek",
    },
    {
        id: "p3",
        title: "Open architectuur",
        subtitle: "Buitenkeuken, lounge en schaduwzone in één volume.",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&h=1200&fit=crop&q=80",
        tag: "Open",
    },
    {
        id: "p4",
        title: "Strak en compact",
        subtitle: "Aluminium accenten, vlakke gevel, geïntegreerd terras.",
        image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=900&h=1200&fit=crop&q=80",
        tag: "Strak",
    },
    {
        id: "p5",
        title: "Hout en pleisterwerk",
        subtitle: "Hybride stijl die aansluit bij een klassieke villa.",
        image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=900&h=1200&fit=crop&q=80",
        tag: "Hybride",
    },
    {
        id: "p6",
        title: "Schaduw en functie",
        subtitle: "Overdekt terras, kleedruimte en buitendouche.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=1200&fit=crop&q=80",
        tag: "Functioneel",
    },
];

const RoundButton = ({
    icon: Icon,
    className,
    ...props
}: {
    icon: FC<{ className?: string }>;
    className?: string;
    "aria-label"?: string;
}) => (
    <Button
        {...props}
        color="link-gray"
        className={cx(
            "group flex size-12 items-center justify-center rounded-full bg-white ring-1 ring-black/15 backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-[#F2F2F2] md:size-14",
            className,
        )}
    >
        <Icon className="size-5 text-black transition-inherit-all md:size-6" />
    </Button>
);

const RealisatiesSection = () => {
    return (
        <section
            id="realisaties"
            className="overflow-hidden bg-white py-16 md:py-24"
            aria-labelledby="realisaties-titel"
        >
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
                    <div className="flex max-w-3xl flex-col gap-4">
                        <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Realisaties</p>
                        <h2 id="realisaties-titel" className="text-display-sm font-semibold text-balance text-black md:text-display-md">
                            Elk project ontworpen op <strong className="font-black">maat</strong> van de woning.
                        </h2>
                        <p className="text-lg text-black md:text-xl">
                            Een greep uit onze recent gerealiseerde poolhouses — modern, klassiek of een combinatie van beide.
                        </p>
                    </div>

                    <Button href="#offerte" size="xl" iconTrailing={ArrowRight} className="self-start lg:self-end">
                        Vraag uw gratis offerte aan
                    </Button>
                </div>

                <Carousel.Root className="mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {projects.map((project) => (
                            <Carousel.Item
                                key={project.id}
                                className="group relative flex h-118 max-w-76 shrink-0 cursor-grab items-end overflow-hidden rounded-2xl bg-[#F2F2F2] md:h-126 md:w-full md:max-w-sm"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                <div className="relative flex w-full flex-col gap-3 p-6 md:p-8">
                                    <span className="self-start rounded-full bg-[#C19848] px-3 py-1 text-xs font-bold text-white">
                                        {project.tag}
                                    </span>
                                    <p className="text-display-xs font-bold text-white md:text-display-sm">{project.title}</p>
                                    <p className="text-md text-white/90">{project.subtitle}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>

                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} aria-label="Vorige realisatie" />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} aria-label="Volgende realisatie" />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>
        </section>
    );
};

type Pillar = { eyebrow: string; title: string; body: ReactNode; icon: FC<{ className?: string }> };
const pillars: Pillar[] = [
    {
        icon: Award01,
        eyebrow: "Sinds 1992",
        title: "33 jaar familiebedrijf",
        body: (
            <>
                <p>
                    Ostyn is sinds <strong className="font-bold">1992</strong> een familiebedrijf, opgericht door{" "}
                    <strong className="font-bold">Yvan Ostyn</strong> en vandaag voortgezet door zijn zonen{" "}
                    <strong className="font-bold">Thomas</strong> en <strong className="font-bold">Laurens</strong>. Sinds 2023
                    brengen we <strong className="font-bold">Veranclassic</strong> en <strong className="font-bold">Poolhouse Plaza</strong>{" "}
                    samen onder één naam.
                </p>
                <p className="mt-3 text-sm italic text-black/70 md:text-md">
                    &ldquo;Alles blijft hetzelfde, behalve de naam.&rdquo;
                </p>
            </>
        ),
    },
    {
        icon: Tool01,
        eyebrow: "Niets uitbesteed",
        title: "Eigen atelier",
        body: (
            <p>
                Elke poolhouse wordt door <strong className="font-bold">onze eigen vaklui</strong> gebouwd in ons atelier in{" "}
                <strong className="font-bold">Dottenijs</strong>. Geen onderaanneming, geen tussenpartij. Eén keten van
                verantwoordelijkheid — van eerste schets tot laatste schroef.
            </p>
        ),
    },
    {
        icon: Building01,
        eyebrow: "Open 7/7",
        title: "3.000 m² showroom",
        body: (
            <p>
                De <strong className="font-bold">grootste overdekte showroom</strong> voor tuinconstructies in België en
                Noord-Frankrijk. <strong className="font-bold">Zeven dagen op zeven</strong> open — ook tijdens weekends en
                feestdagen. Materialen bekijkt u op ware grootte, naast elkaar.
            </p>
        ),
    },
];

const WaaromSection = () => {
    return (
        <section id="waarom" className="bg-[#F2F2F2] py-16 md:py-24" aria-labelledby="waarom-titel">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                    <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Waarom Ostyn</p>
                    <h2 id="waarom-titel" className="text-display-sm font-semibold text-balance text-black md:text-display-md">
                        Drie redenen waarom <strong className="font-black">pooleigenaars</strong> voor ons kiezen.
                    </h2>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
                    {pillars.map((p) => (
                        <li
                            key={p.title}
                            className="flex flex-col items-start gap-5 rounded-2xl bg-white p-6 md:p-8"
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#C19848] text-white">
                                <p.icon className="size-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-wider text-black uppercase">{p.eyebrow}</p>
                                <h3 className="mt-1 text-xl font-bold text-black md:text-display-xs">{p.title}</h3>
                            </div>
                            <div className="text-md text-black">{p.body}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

type Step = { num: string; title: string; body: string };
const steps: Step[] = [
    {
        num: "01",
        title: "Adviesgesprek",
        body: "In onze showroom in Dottenijs of bij u thuis. We luisteren, kijken naar uw woning en geven concreet advies — zonder verkoopdruk.",
    },
    {
        num: "02",
        title: "3D-ontwerp en offerte op maat",
        body: "U ziet uw poolhouse in 3D vóór u tekent. De offerte is gedetailleerd en transparant. Wat we afspreken, blijft staan — geen meerwerk dat halverwege opduikt.",
    },
    {
        num: "03",
        title: "Productie in eigen atelier",
        body: "Uw poolhouse wordt door onze vaklui in Dottenijs gebouwd. Geen onderaanneming betekent: geen verborgen kosten en geen verschuiven van verantwoordelijkheid.",
    },
    {
        num: "04",
        title: "Plaatsing door Ostyn-teams",
        body: "Onze eigen monteurs leveren en plaatsen. Eén ploeg op uw terrein, één aanspreekpunt voor de planning.",
    },
    {
        num: "05",
        title: "Klantenportaal en oplevering",
        body: "U volgt uw project online via het Ostyn-klantenportaal. Bij oplevering overlopen we elk detail samen.",
    },
];

const ProcesSection = () => {
    return (
        <section id="proces" className="bg-white py-16 md:py-24" aria-labelledby="proces-titel">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                    <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Hoe werkt het</p>
                    <h2 id="proces-titel" className="text-display-sm font-semibold text-balance text-black md:text-display-md">
                        Van eerste gesprek tot oplevering — <strong className="font-black">zonder verrassingen</strong>.
                    </h2>
                    <p className="text-lg text-black md:text-xl">
                        U weet vooraf hoe uw poolhouse eruit ziet, wat het kost, en wanneer het klaar is. De afgesproken prijs houdt
                        stand.
                    </p>
                </div>

                <ol className="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-5 lg:gap-6">
                    {steps.map((step, index) => (
                        <li key={step.num} className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#C19848] text-md font-bold text-white md:size-14 md:text-lg">
                                    {step.num}
                                </span>
                                {index < steps.length - 1 && (
                                    <span aria-hidden="true" className="hidden h-px flex-1 bg-black/15 lg:block" />
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-black md:text-xl">{step.title}</h3>
                                <p className="mt-2 text-md text-black">{step.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-[#F2F2F2] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                    <div className="flex items-start gap-4">
                        <Clock className="mt-0.5 size-6 shrink-0 text-[#C19848]" />
                        <p className="text-md text-black">
                            <strong className="font-bold">Typische doorlooptijd: 3 tot 6 maanden</strong> van getekende offerte tot
                            oplevering. We bevestigen de planning bij de offerte; per project kan dit licht variëren.
                        </p>
                    </div>
                    <Button href="#offerte" size="lg" iconTrailing={ArrowRight} className="shrink-0">
                        Vraag uw offerte aan
                    </Button>
                </div>
            </div>
        </section>
    );
};

type Testimonial = { quote: string; author: string; project: string };
const testimonials: Testimonial[] = [
    {
        quote: "Een dikke pluim aan al uw medewerkers! Naar aanleiding van de aankoop van een poolhouse bij uw bedrijf, zouden wij toch een dikke pluim willen geven aan al uw medewerkers!",
        author: "Familie Devos",
        project: "poolhouse",
    },
    {
        quote: "Ik heb zelden zulke bekwame, gedreven en vriendelijke vaklui aan het werk gezien!",
        author: "Mr. Palsterman",
        project: "garage",
    },
    {
        quote: "We hadden gelijk om jullie bedrijf te vertrouwen.",
        author: "Mr. & Mevr. Lechantre",
        project: "carport",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-[#F2F2F2] py-16 md:py-24" aria-labelledby="getuigenissen-titel">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star01 key={i} className="size-5 fill-[#C19848] text-[#C19848]" />
                        ))}
                    </div>
                    <h2
                        id="getuigenissen-titel"
                        className="mt-4 text-display-sm font-semibold text-balance text-black md:text-display-md"
                    >
                        Wat onze klanten zeggen.
                    </h2>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
                    {testimonials.map((t) => (
                        <li
                            key={t.author}
                            className="flex flex-col gap-6 rounded-2xl bg-white p-6 md:p-8"
                        >
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star01 key={i} className="size-4 fill-[#C19848] text-[#C19848]" />
                                ))}
                            </div>
                            <blockquote className="flex-1 text-lg font-medium text-balance text-black md:text-xl">
                                <p>&ldquo;{t.quote}&rdquo;</p>
                            </blockquote>
                            <footer className="text-sm text-black/70">
                                <span className="font-bold text-black">— {t.author}</span>
                                <span className="ml-1">· {t.project}</span>
                            </footer>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const aftercareItems = [
    "Eigen SAV-team voor service na verkoop — geen externe hotline.",
    "Onderhouds- en garantievoorwaarden open en op voorhand beschikbaar.",
    "Klantenportaal blijft toegankelijk, ook jaren na de oplevering.",
    "Familiebedrijf sinds 1992. De namen op de offerte zijn de namen die u nadien terugvindt.",
];

const NazorgSection = () => {
    return (
        <section className="bg-white py-16 md:py-24" aria-labelledby="nazorg-titel">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex max-w-2xl flex-col gap-4 md:gap-5">
                        <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Nazorg</p>
                        <h2
                            id="nazorg-titel"
                            className="text-display-sm font-semibold text-balance text-black md:text-display-md"
                        >
                            Ons werk stopt <strong className="font-black">niet</strong> bij de oplevering.
                        </h2>
                        <p className="text-lg text-black md:text-xl">
                            Een poolhouse is een investering voor decennia. U mag verwachten dat de partner die hem bouwt, er ook
                            over tien jaar nog is.
                        </p>
                        <p className="mt-2 text-md text-black/70">
                            Eerlijk gezegd: premium materialen zoals Afrormosia hardhout en Trespa zijn duurzaam, maar vragen
                            onderhoud. We zijn daar open over en bezorgen u onze onderhoudsgids bij de oplevering.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-5">
                        {aftercareItems.map((item) => (
                            <li key={item} className="flex items-start gap-4">
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#C19848]">
                                    <CheckCircle className="size-5 text-white" />
                                </span>
                                <p className="text-md text-black md:text-lg">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ShowroomSection = () => {
    return (
        <section id="showroom" className="bg-[#C19848] py-16 md:py-24" aria-labelledby="showroom-titel">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className="flex flex-col">
                    <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Showroom</p>
                    <h2 id="showroom-titel" className="mt-3 text-display-sm font-semibold text-balance text-black md:text-display-md">
                        Kom langs in <strong className="font-black">Dottenijs</strong>.
                    </h2>
                    <p className="mt-4 text-lg text-black md:mt-5 md:text-xl">
                        <strong className="font-bold">3.000 m² overdekt</strong>, zeven dagen op zeven open. Poolhouses, veranda&apos;s,
                        carports en tuinkamers op ware grootte. Materialen die u kunt voelen — Afrormosia, Trespa, Aquapanel.
                    </p>
                    <ul className="mt-8 flex flex-col gap-4 text-md text-black">
                        <li className="flex items-start gap-3">
                            <MarkerPin01 className="mt-0.5 size-5 shrink-0 text-black" />
                            <span>Engelse Wandeling 2, 7711 Dottenijs (Mouscron)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Calendar className="mt-0.5 size-5 shrink-0 text-black" />
                            <span>7 dagen op 7 open — ook tijdens weekends en feestdagen</span>
                        </li>
                    </ul>
                    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row">
                        <Button href="#inspiratieboek" color="secondary" size="xl" iconTrailing={ArrowUpRight}>
                            Download het inspiratieboek
                        </Button>
                        <Button href="#offerte" size="xl" iconTrailing={ArrowRight} className="!bg-black !text-white hover:!bg-black/85">
                            Vraag uw offerte aan
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&h=900&fit=crop&q=80"
                            alt="Ostyn showroom in Dottenijs"
                            className="aspect-[4/3] w-full object-cover"
                        />
                    </div>
                    <div className="absolute -right-4 -bottom-4 hidden flex-col gap-1 rounded-2xl bg-white px-6 py-4 shadow-2xl md:flex">
                        <p className="text-display-xs font-bold text-black">3.000 m²</p>
                        <p className="text-sm font-medium text-black/70">overdekte showroom</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OfferteSection = () => {
    return (
        <section id="offerte" className="bg-[#F2F2F2] py-16 md:py-24" aria-labelledby="cta-titel">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
                    <p className="text-sm font-bold tracking-wider text-black uppercase md:text-md">Offerte aanvragen</p>
                    <h2 id="cta-titel" className="text-display-sm font-semibold text-balance text-black md:text-display-md">
                        Klaar om uw poolhouse <strong className="font-black">concreet</strong> te maken?
                    </h2>
                    <p className="text-lg text-black md:text-xl">
                        Vraag uw <strong className="font-bold">gratis offerte</strong> aan voor uw poolhouse. Vrijblijvend, zonder
                        verkoopdruk, met antwoord binnen 2 werkdagen.
                    </p>

                    <ul className="mt-4 flex flex-col gap-3 text-md text-black">
                        <li className="flex items-start gap-3">
                            <Check className="mt-0.5 size-5 shrink-0 text-[#C19848]" />
                            <span>Vrijblijvend, geen verkoopdruk</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="mt-0.5 size-5 shrink-0 text-[#C19848]" />
                            <span>Antwoord binnen 2 werkdagen</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="mt-0.5 size-5 shrink-0 text-[#C19848]" />
                            <span>Gratis 3D-ontwerp bij ondertekening</span>
                        </li>
                    </ul>

                    <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-6 text-md text-black">
                        <a href="tel:+3256480480" className="flex items-center gap-3 hover:opacity-80">
                            <Phone className="size-5 text-[#C19848]" />
                            <span className="font-bold">+32 56 48 04 80</span>
                        </a>
                        <a href="mailto:info@ostyn.be" className="flex items-center gap-3 hover:opacity-80">
                            <Mail01 className="size-5 text-[#C19848]" />
                            <span className="font-bold">info@ostyn.be</span>
                        </a>
                    </div>
                </div>

                <form
                    action="#"
                    method="post"
                    className="flex flex-col gap-5 rounded-2xl bg-white p-6 md:p-8"
                >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Input label="Voornaam" name="voornaam" placeholder="Voornaam" autoComplete="given-name" isRequired />
                        <Input label="Naam" name="naam" placeholder="Naam" autoComplete="family-name" isRequired />
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Input label="E-mail" type="email" name="email" placeholder="u@voorbeeld.be" autoComplete="email" isRequired />
                        <Input label="Telefoon" type="tel" name="telefoon" placeholder="+32 …" autoComplete="tel" />
                    </div>
                    <Input
                        label="Postcode & gemeente"
                        name="locatie"
                        placeholder="bv. 8500 Kortrijk"
                        autoComplete="postal-code"
                    />
                    <TextArea
                        label="Vertel ons over uw project (optioneel)"
                        name="bericht"
                        placeholder="Bv. afmetingen pool, gewenste functies, timing…"
                        rows={4}
                    />
                    <Checkbox
                        name="privacy"
                        isRequired
                        label={
                            <span className="text-sm text-black">
                                Ik ga akkoord met de verwerking van mijn gegevens volgens de{" "}
                                <a
                                    href="https://ostyn.be/privacy"
                                    target="_blank"
                                    rel="noopener"
                                    className="font-bold text-black underline underline-offset-4"
                                >
                                    privacyverklaring
                                </a>
                                .
                            </span>
                        }
                    />
                    <Button type="submit" size="xl" iconTrailing={Send01} className="mt-2">
                        Vraag uw gratis offerte aan
                    </Button>
                    <p className="text-center text-sm text-black/70">
                        Vrijblijvend · Geen verkoopdruk · Antwoord binnen 2 werkdagen
                    </p>
                </form>
            </div>

            <p id="inspiratieboek" className="mx-auto mt-12 max-w-container px-4 text-center text-md text-black md:px-8">
                Liever eerst wat inspiratie?{" "}
                <a
                    href="https://ostyn.be/inspiratieboek"
                    target="_blank"
                    rel="noopener"
                    className="font-bold text-black underline underline-offset-4"
                >
                    Download het inspiratieboek →
                </a>
            </p>
        </section>
    );
};

const footerCols = [
    {
        label: "Showroom",
        items: [
            { label: "Engelse Wandeling 2", href: null },
            { label: "7711 Dottenijs (Mouscron)", href: null },
            { label: "7 dagen op 7 open", href: null },
        ],
    },
    {
        label: "Contact",
        items: [
            { label: "+32 56 48 04 80", href: "tel:+3256480480" },
            { label: "info@ostyn.be", href: "mailto:info@ostyn.be" },
        ],
    },
    {
        label: "Juridisch",
        items: [
            { label: "Privacybeleid", href: "https://ostyn.be/privacy" },
            { label: "Cookiebeleid", href: "https://ostyn.be/cookies" },
            { label: "Algemene voorwaarden", href: "https://ostyn.be/algemene-voorwaarden" },
        ],
    },
];

const OstynFooter = () => {
    return (
        <footer className="bg-white py-12 md:pt-16 md:pb-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 border-t border-black/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <img src="/logo-text.svg" alt="Ostyn" className="h-9 w-auto" />
                        <p className="max-w-xs text-md text-black">
                            Specialist in tuinconstructies, woonuitbreidingen en poolhouses. Sinds 1992.
                        </p>
                    </div>
                    {footerCols.map((col) => (
                        <div key={col.label} className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold tracking-wider text-black uppercase">{col.label}</h4>
                            <ul className="flex flex-col gap-2">
                                {col.items.map((item) => (
                                    <li key={item.label} className="text-md text-black">
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel={item.href.startsWith("http") ? "noopener" : undefined}
                                                className="hover:opacity-70"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            item.label
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center">
                    <p className="text-sm text-black/70">
                        © {new Date().getFullYear()} Ostyn — voorheen Veranclassic &amp; Poolhouse Plaza.
                    </p>
                    <div className="flex gap-4 text-sm text-black/70">
                        <a href="#realisaties" className="hover:text-black">
                            Realisaties
                        </a>
                        <a href="#waarom" className="hover:text-black">
                            Waarom Ostyn
                        </a>
                        <a href="#proces" className="hover:text-black">
                            Proces
                        </a>
                        <a href="#showroom" className="hover:text-black">
                            Showroom
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LandingPage17 = () => {
    return (
        <div className="bg-white">
            <OstynHeader />
            <main id="hoofdinhoud">
                <HeroSection />
                <PromiseSection />
                <SectionDivider />
                <RealisatiesSection />
                <SectionDivider />
                <WaaromSection />
                <ProcesSection />
                <ShowroomSection />
                <TestimonialsSection />
                <NazorgSection />
                <OfferteSection />
            </main>
            <OstynFooter />
        </div>
    );
};

export default LandingPage17;
