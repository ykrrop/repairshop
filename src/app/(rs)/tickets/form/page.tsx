import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import TicketForm from "./TicketForm";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Необходим ID заказа или ID клиента для загрузки формы
          </h2>
          <BackButton title="Назад" variant="default" />
        </>
      );
    }
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Клиент с ID #{customerId} не найден
            </h2>
            <BackButton title="Назад" variant="default" />
          </>
        );
      }
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Клиент с ID #{customerId} не активен
            </h2>
            <BackButton title="Назад" variant="default" />
          </>
        );
      }
      console.log(customer);
      return <TicketForm customer={customer} />;
    }
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Заказ с ID #{ticketId} не найден</h2>
            <BackButton title="Назад" variant="default" />
          </>
        );
      }
      const customer = await getCustomer(ticket.customerId);
      console.log("ticket: ", ticket);
      console.log("customer: ", customer);
      return <TicketForm customer={customer} ticket={ticket} />;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
