import { PRODUCTS_LIST, SERVICES_DETAILS, TextItem } from '@/lib/pt_text';
import '../services.scss';
import { ServiceTitle, ServiceOffers, Benefits, Carrosel } from '../page';
import ServiceCard from '@/components/service_card/service_card';

const THIS_SERVICE = SERVICES_DETAILS.AIApplications


export default function AIApplications() {
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