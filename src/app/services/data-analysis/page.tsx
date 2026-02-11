import { PRODUCTS_LIST, SERVICES_DETAILS } from '@/lib/pt_text';
import '../services.scss';
import { ServiceTitle, ServiceOffers, Benefits, Carrosel } from '../services_blocks';

const THIS_SERVICE = SERVICES_DETAILS.dataAnalysis


export default function DataAnalysis() {
  return (
    <div className="service">
      <ServiceTitle
        title={THIS_SERVICE.title}
        description={THIS_SERVICE.description} />
      <ServiceOffers itemsList={THIS_SERVICE.items} />
      <Benefits
        benefits={THIS_SERVICE.benefits}
      />
      <Carrosel products={PRODUCTS_LIST} />
    </div>
  )
}