import { notFound } from "next/navigation";

export const dynamicParams = true; // allow next to try to fetch data again if the page is not availabel pre rendeered.default value is true
//if made false , thenext try if the page is pre rendered and if not will throw a 404 page

export async function generateStaticParams(){ //make next build the pages when project is building6
    const res = await fetch("http://localhost:4000/tickets");
    const tickets =await res.json();
    return tickets.map((ticket)=> ({
        id: ticket.id
    }))
      return res.json();

}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if(!res.ok){
    notFound()
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by : {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
