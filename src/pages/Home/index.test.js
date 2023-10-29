import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // Rendu de la page Home
    render(<Home />);
    //Recherche de l'id listEvents dans le document grace au data-testid
    expect(screen.getByTestId("listEvents")).toBeInTheDocument()
    //Regarde que la liste contient bien des events
    waitFor(()=>{
      expect(screen.getByText("#ProductCON")).toBeInTheDocument()
    })
  })
  it("a list a people is displayed", () => {
    // Rendu de la page Home
    render(< Home />)
    //Recherche de l'id peoplesContainer dans le document grace au data-testid
    expect(screen.getByTestId("peoplesContainer")).toBeInTheDocument()
    //Regarde qu'il y ai bien Samira et Christine sur la page
    expect(screen.getByText("Samira")).toBeInTheDocument()
    expect(screen.getByText('Christine')).toBeInTheDocument()
  })
  it("a footer is displayed", () => {
    // Rendu de la page Home
    render(< Home />)
     //Recherche de l'id footer dans le document grace au data-testid
    expect(screen.getByTestId("footer")).toBeInTheDocument()
    //Regarde qu'il y a bien l'adresse email dans le footer
    expect(screen.getByText("contact@77events.com")).toBeInTheDocument()
  })
  it("an event card, with the last event, is displayed", () => {
   // Rendu de la page Home
    render(< Home />)
    waitFor(() => {
      //Recherche de l'id lastEvent dans le document grace au data-testid
      expect(screen.getByTestId("lastEvent")).toBeInTheDocument()
      // Regarde qu'il y ai bien une date dans le document en utilisant le Role de la carte
      expect(screen.getByRole('date')).toBeInTheDocument()
    })
  })
});
