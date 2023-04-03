import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Address = () => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sundar Pichai</Accordion.Header>
        <Accordion.Body>
          Pichai Sundararajan, plus connu sous le nom de Sundar Pichai, né à
          Chennai en Inde le 12 juillet 1972, est un dirigeant d'entreprise
          indo-américain, président-directeur général de Google depuis le 10
          août 2015 à la suite de la restructuration de Google et la création de
          la nouvelle société Alphabet. Le 4 décembre 2019, les fondateurs lui
          cèdent l'entière direction opérationnelle du groupe.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Biographie</Accordion.Header>
        <Accordion.Body>
          Sundar Pichai est diplômé en 1993 de l'Institut indien de technologie
          de Kharagpur, où il a étudié le fonctionnement et l'ingénierie des
          ressources primaires tels que le sels d'aluminium. Par la suite il
          obtient un master en « engineering and materials » à l'université
          Stanford, et un MBA à la Wharton School de l'université de
          Pennsylvanie2. Il travaille ensuite pour le constructeur de
          semi-conducteurs Applied Materials, et en tant que consultant en
          management pour McKinsey. Il rejoint Google en 2004 en tant que
          vice-président pour le management produit, et dirige iGoogle, Google
          Toolbar, Google Desktop Search, Google Gadgets, Google Pack et Gears.
          En 2011, il est nommé senior vice president de Chrome et G Suite, et
          supervise à ce titre le développement de Chrome, Chrome OS, Gmail,
          Calendar, Docs et Drive. En mars 2013, il est nommé à la direction
          d'Android à la place d'Andy Rubin3, en plus de ses responsabilités
          antérieures. Le 10 août 2015, il devient le nouveau PDG de Google4 à
          la suite de la restructuration de l'entreprise et la création de la
          nouvelle société Alphabet. En août 2017, S. Pichai a rendu public le
          licenciement d'un employé de Google qui avait rédigé un manifeste de
          dix pages critiquant la politique de l'entreprise en matière de
          diversité et affirmant que « la répartition des capacités des hommes
          et des femmes diffère en partie en raison de causes biologiques et...
          ces différences peuvent expliquer pourquoi nous ne voyons pas une
          représentation égale des femmes dans la technologie et le
          commandement. » Tout en notant que le manifeste soulevait un certain
          nombre de questions ouvertes au débat, M. Pichai a déclaré dans une
          note aux employés de Google que « suggérer qu'un groupe de nos
          collègues possèderait des traits qui les rendent moins adaptés
          biologiquement à leur travail est offensant et pas OK. » Le 4 décembre
          2019, il est à la tête de l'ensemble du groupe à la suite de
          l'annonce5 des deux fondateurs Sergey Brin et Larry Page.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Address;
