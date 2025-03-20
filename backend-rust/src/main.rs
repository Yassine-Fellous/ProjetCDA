use actix_web::{get, App, HttpServer, Responder, HttpResponse};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello World")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello) // Route principale "/"
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}