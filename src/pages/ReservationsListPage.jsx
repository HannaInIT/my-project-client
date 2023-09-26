function ReservationsListPage() {
  return (
    <div>
      <h1>This is reservations list page</h1>
    </div>
  );
}
 
export default ReservationsListPage;

//  //  GET /reservations/reservations-by-car/:carId -  Retrieves all reservations for one car
//  router.get("/reservations-by-car/:carId", (req, res, next) => {
//   const { carId } = req.params;
//   var query = { carId: carId };
//   Reservation.find(query)
//   //   .populate("reservations")
//     .then((allReservations) => res.json(allReservations))
//     .catch((err) => res.json(err));
// });