
import {

    Box,

  } from '@chakra-ui/react'
  
 
  import Card from '../components/card'
  
  const InfoCards = ({}) => (
  
    <Box p={4}>

    <div id="app" className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card dataImage="https://www.oelis.fr/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/electricité-courant-fort-disjoncteurs.jpeg.webp"
        title="COURANT FORT/COURANT FAIBLE"
        description="MyElec est spécialisée dans la réalisation des projets d’électricité : courant fort, courant faible et GTB. Garantissant une installation électrique fiable et sécurisée pour tous vos besoins"></Card>
      <Card dataImage="https://blog.koorsen.com/hs-fs/hubfs/Integration_of_Access_Control.jpg?width=2400&height=1600&name=Integration_of_Access_Control.jpg"
        title="SÉCURITÉ INCENDIE CONTRÔLE D'ACCÈS ET INTRUSION"
     description="Votre sécurité est notre priorité ! MyElec offre des systèmes de contrôle d'accès et de détection d'intrusion et d’incendies de pointe pour une tranquillité d'esprit totale"></Card>
      <Card dataImage="https://images.ctfassets.net/4cd45et68cgf/6EXykqN1R4oZJaxiuhaq8e/e64eb5191afc9cbc05baa69321cd81dd/NetflixProgressReport_1920x1080.jpg?w=2000"
        title="ENGAGEMENT ENVIRONNEMENTAL"
        description="Nous nous engageons à minimiser notre empreinte carbone tout en offrant des solutions électriques haut de gamme. Nous utilisons des technologies éco-responsables et promouvons l'efficacité énergétique à chaque étape de notre travail."></Card>
      <Card dataImage="https://img.freepik.com/premium-vector/cyber-security-technology-concept-shield-with-keyhole-icon-circuit-board-personal-data_184920-705.jpg"
        title="NOTRE DISCRÉTION, LA SÉCURITÉ DE VOS BIENS"
        description="Offrir un service à la hauteur des projets de nos clients, avec attention, discrétion et expertise. *** Une éthique professionnelle rigoureuse, faite de proximité et de discrétion.
Nous mettons ainsi en œuvre tous les moyens techniques et humains pour préserver l’intégrité et la confidentialité de nos clients.">
      </Card>
    </div>
  </Box>
  
  )
  
  export default InfoCards
  export { getServerSideProps } from '../components/chakra'
  