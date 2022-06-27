// pages/algemene-voorwaarden.js

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Layout from '../src/layout/layout';
import Stack from '../src/components/stack';
import Text from '../src/components/text';

const Conditions = () => {
    return (
        <Layout>
            <Stack
                gap="m"
                p="2rem"
                pl="3vw"
                ml="auto"
                mr="auto"
                maxWidth="48rem"
                flexDirection="column">

                <Heading level={1}>Over Nico Prevoo</Heading>
                <Text>Sinds 2016 ben ik woonachtig in de gemeente Sint-Michielsgestel. Graag stel ik mij aan u voor.
                    Wilt u mij bereiken kan dat via het telefoonnummer 06-53960746 of via een mail naar
                    mail@nicoprevoo.nl.</Text>

                <Heading level={2} id="section01">
                    Achtergond?
                </Heading>
                <Text>In 1981 ben ik geboren in ’s-Hertogenbosch. Op de Maaspoort ben ik opgegroeid. Daarna ben ik in
                    een appartement gaan wonen aan de Graafseweg in ’s-Hertogenbosch. Daar heb ik mijn vrouw Véronique
                    leren kennen. In 2013 zijn we getrouwd. In 2015 hebben we onze dochter Sophie en in 2018 onze zoon
                    Maurits verwelkomd in ons gezin. In 2016 zijn we verhuisd naar Den Dungen en wonen we inmiddels in
                    de wijk Bramersland. Mijn opleiding tot registeraccountant heb ik mogen volgen op de Universiteit
                    van Tilburg (bedrijfseconomie) en daarna Universiteit van Nyenrode (accountancy).
                </Text>

                <Heading level={2} id="section02">
                    Werk?
                </Heading>
                <Text>
                    Sinds 2015 ben ik de eigenaar van mijn eigen accountantskantoor. Met mijn achtergrond als
                    registeraccountant wilde ik ook klanten kunnen adviseren door zelf ook ondernemer te zijn. Dit was
                    dus een logische keuze. Hierbij is mijn specialisme vooral gelegen op het gebied van advisering en
                    begeleiding van DGA’s. Iedere dag is weer anders en niet te voorspellen, kortom een van de beste
                    keuzes ooit!
                </Text>

                <Heading level={2} id="section03">
                    Vrije tijd?
                </Heading>
                <Text>
                    In het verleden ben ik zeer actief geweest in diverse verenigingen, waaronder de VVD, Rotaract
                    (jongeren Rotary) en JOVD. Momenteel ben ik actief van de Oeteldonksche Club van 1882 als lid van de
                    commissie Kwekfestijn en het Boerenparrelement (ledenraad van de Oeteldonksche Club). Naast dit ben
                    ik fervent fietser bij WTTC Vlug Trug in Den Dungen en probeer ik regelmatig een rondje over de
                    dijken van Den Dungen te hardlopen. Maar de belangrijkste (ere-)functie die ik mag bekleden is toch
                    wel vader zijn van een prachtige dochter Sophie en zoon Maurits.
                </Text>

                <Heading level={2} id="section04">
                    Lokale banden?
                </Heading>
                <Text>
                    Sinds 2016 woon ik samen met Véronique, Sophie en Maurits in Den Dungen. Hierdoor ben ik mijn lokale
                    banden
                    nog aan het opbouwen, maar elke dag weer wonen we met veel plezier in dit dorp. Door het
                    kinderdagverblijf waar Sophie en Maurits naar toe gaan, leren we ook steeds meer ouders kennen. Als
                    ondernemer
                    ben ik ook lid van de Ondernemersvereniging Sint-Michielsgestel.
                </Text>

                <Heading level={2} id="section05">
                    Waarom liberaal?
                </Heading>
                <Text>
                    Liberaal zijn betekent voor mij vrijheid, verantwoordelijkheid, verdraagzaamheid, sociale
                    rechtvaardigheid en gelijkwaardigheid van mensen. Waarbij de overheid vooral optreedt als vangnet
                    voor degenen die niet meekunnen.
                </Text>

                <Heading level={2} id="section06">
                    Doel?
                </Heading>
                <Text>
                    Een vrije en rechtvaardige Gestelse samenleving, waarbij de overheid optreedt en handhaaft waar
                    problemen zijn, maar tegelijkertijd de burger ook zoveel mogelijk vrij laat en geen onnodige
                    obstakels in de weg legt.
                </Text>
            </Stack>
        </Layout>
    )
};

/** @component */
export default Conditions;
