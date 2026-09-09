import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const CONTACTO = "sebastian@fuentelibre.org";

const Mail = () => (
  <a href={`mailto:${CONTACTO}`} className="text-primary hover:underline">
    {CONTACTO}
  </a>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-sixtyfour text-base font-bold text-primary md:text-lg">{title}</h2>
    <div className="space-y-4 font-rajdhani leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

const Tabla = ({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full border-collapse text-left font-rajdhani text-sm">
      <thead>
        <tr className="border-b border-border bg-card/50">
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-semibold uppercase tracking-wider text-primary">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/40 align-top last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-muted-foreground">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Privacidad = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 gradient-void" />

      <div className="relative z-10 container mx-auto max-w-3xl px-4 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-rajdhani text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg border border-accent/30 bg-accent/10 p-2">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <span className="font-rajdhani text-sm uppercase tracking-wider text-muted-foreground">
              Documento legal
            </span>
          </div>
          <h1 className="font-sixtyfour text-xl font-bold neon-text-cyan md:text-2xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 font-rajdhani text-lg text-muted-foreground">
            Odisea: El Arca Silenciosa
          </p>
          <dl className="mt-6 space-y-1 font-rajdhani text-sm text-muted-foreground/80">
            <div>
              Última actualización: <span className="text-foreground">2 de agosto de 2026</span>
            </div>
            <div>
              Responsable del tratamiento: <span className="text-foreground">Sebastian Silva</span>
            </div>
            <div>
              Contacto: <Mail />
            </div>
          </dl>
        </header>

        <p className="my-10 border-l-2 border-accent pl-5 font-rajdhani text-lg leading-relaxed text-foreground">
          Odisea recolecta <strong>telemetría anónima</strong> con un único propósito:{" "}
          <strong>mejorar el juego</strong>. No pedimos tu nombre, no creamos cuentas, no mostramos
          publicidad y <strong>no compartimos estos datos con nadie</strong>. Puedes rechazarla en la web y
          desactivarla en las opciones del juego.
        </p>

        <div className="space-y-12">
          <Section title="1. Qué datos recolectamos">
            <p>
              Odisea se juega de dos maneras, y cada una recolecta cosas distintas. Estos son los únicos
              datos que salen de tu dispositivo:
            </p>

            <h3 className="font-rajdhani font-semibold uppercase tracking-wider text-foreground">
              En la versión web (jugable en el navegador)
            </h3>
            <Tabla
              head={["Dato", "Para qué sirve"]}
              rows={[
                ["Métricas de rendimiento (FPS, tiempos de carga)", "Detectar en qué máquinas el juego va mal"],
                ["Errores de consola y cierres inesperados", "Encontrar y corregir bugs"],
                ["Resolución de pantalla y capacidades del navegador", "Verificar compatibilidad"],
              ]}
            />

            <h3 className="pt-2 font-rajdhani font-semibold uppercase tracking-wider text-foreground">
              En las versiones nativas (escritorio y móvil)
            </h3>
            <Tabla
              head={["Dato", "Para qué sirve"]}
              rows={[
                [
                  "Identificador de sesión: UUID aleatorio, regenerado en cada partida",
                  "Agrupar los eventos de una misma sesión. No está vinculado a vos, a tu dispositivo ni a ninguna cuenta.",
                ],
                [
                  "Estado de partida: posición, velocidad, orientación de cámara, escena y zona, modo de juego, marca de tiempo",
                  "Entender cómo se recorre cada nivel",
                ],
                [
                  "Trazas de movimiento (ghosts)",
                  "Generar mapas de calor y reproducir partidas para depurar el diseño de nivel",
                ],
                ["Versión del juego y plataforma", "Detectar problemas de compatibilidad"],
                ["Cierres inesperados y bloqueos de progresión (soft-locks)", "Encontrar y corregir bugs"],
              ]}
            />
            <p>
              En ambos casos los datos son <strong className="text-foreground">anónimos</strong>: no
              contienen ningún elemento que permita identificarte ni vincular una sesión con una persona
              real.
            </p>
          </Section>

          <Section title="2. Qué datos no recolectamos">
            <p>Nunca, bajo ninguna circunstancia, recolectamos:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Nombre, dirección de correo, número de teléfono, cuentas de usuario o contraseñas.</li>
              <li>Contactos, fotos, archivos, calendario, micrófono o cámara.</li>
              <li>Ubicación geográfica, GPS ni datos de sensores de localización.</li>
              <li>
                El identificador de publicidad (<strong className="text-foreground">IDFA</strong>) ni ningún
                identificador persistente del dispositivo.
              </li>
              <li>Datos de pago, financieros o de compras.</li>
              <li>Datos de salud, biométricos o de categoría sensible.</li>
              <li>Contenido generado por la persona usuaria.</li>
              <li>Historial de navegación o actividad en otras apps y sitios.</li>
            </ul>
            <p>
              <strong className="text-foreground">
                No usamos SDKs de analítica de terceros, redes publicitarias, cookies de seguimiento ni
                herramientas de atribución.
              </strong>{" "}
              El juego no muestra publicidad.
            </p>
            <p>
              <strong className="text-foreground">Sobre la dirección IP:</strong> como en cualquier conexión
              a Internet, nuestro servidor recibe la dirección IP desde la que llega la conexión. No la
              almacenamos junto a los datos de telemetría, no la usamos para construir perfiles y no la
              asociamos con el identificador de sesión.
            </p>
          </Section>

          <Section title="3. Para qué usamos los datos">
            <p>Exclusivamente para desarrollar y mejorar el juego:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Diseño de niveles:</strong> mapas de calor de recorridos,
                para saber dónde la gente se atasca, se pierde o muere repetidamente.
              </li>
              <li>
                <strong className="text-foreground">Balance de dificultad:</strong> ajustar saltos, enemigos
                y puzzles según cómo se juegan realmente.
              </li>
              <li>
                <strong className="text-foreground">Corrección de errores:</strong> reproducir sesiones que
                terminaron en un crash o en un bloqueo de progresión.
              </li>
              <li>
                <strong className="text-foreground">Rendimiento:</strong> verificar que el juego corre
                correctamente en cada plataforma.
              </li>
            </ul>
            <p>
              <strong className="text-foreground">Nunca</strong> usamos estos datos para publicidad,
              elaboración de perfiles, puntuación de personas, venta de audiencias ni ningún fin comercial
              ajeno al desarrollo del juego.
            </p>
          </Section>

          <Section title="4. Con quién compartimos los datos">
            <p className="text-xl font-semibold text-foreground">Con nadie.</p>
            <p>
              No vendemos, alquilamos, cedemos ni intercambiamos la telemetría. No la enviamos a corredores
              de datos (<em>data brokers</em>), redes publicitarias, plataformas de analítica ni socios
              comerciales.
            </p>
            <p>Las dos únicas excepciones posibles son:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Proveedor de alojamiento:</strong> el servidor que
                almacena la telemetría corre en infraestructura contratada, que actúa únicamente como
                proveedor técnico y no accede al contenido de los datos ni lo usa para fines propios.
              </li>
              <li>
                <strong className="text-foreground">Obligación legal:</strong> si un requerimiento legal
                válido nos obligara a entregar información. Dado que los datos son anónimos, en la práctica
                no hay nada que permita identificar a una persona.
              </li>
            </ol>
          </Section>

          <Section title="5. Dónde se guardan y por cuánto tiempo">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                La telemetría se almacena en una base de datos bajo nuestro control, con acceso restringido
                al equipo de desarrollo.
              </li>
              <li>
                Las <strong className="text-foreground">sesiones completas</strong> se conservan un{" "}
                <strong className="text-foreground">máximo de 12 meses</strong>. Pasado ese plazo se eliminan
                o se consolidan en estadísticas agregadas irreversiblemente anónimas.
              </li>
              <li>
                Las <strong className="text-foreground">estadísticas agregadas</strong> no se vinculan a
                ninguna sesión individual y pueden conservarse indefinidamente.
              </li>
            </ul>
          </Section>

          <Section title="6. Transmisión y seguridad">
            <p>
              Los datos se transmiten mediante conexiones cifradas (HTTPS / WSS) y se almacenan en un
              servidor con acceso restringido. Aplicamos medidas razonables para proteger la información,
              aunque ningún sistema es infalible.
            </p>
          </Section>

          <Section title="7. Cómo rechazar o desactivar la telemetría">
            <p>
              <strong className="text-foreground">En la web:</strong> la primera vez que entras te mostramos
              un aviso con dos botones. Si eliges{" "}
              <strong className="text-foreground">"Rechazar (sin telemetría)"</strong>, no se envía ningún
              dato. Tu decisión se guarda en el almacenamiento local de tu navegador; si lo borras, volveremos
              a preguntarte.
            </p>
            <p>
              <strong className="text-foreground">En las versiones nativas:</strong> puedes desactivar el
              envío de telemetría desde las <strong className="text-foreground">opciones del juego</strong>,
              en la sección de privacidad. Con la opción desactivada, el juego deja de enviar heartbeats,
              ghosts y datos de diagnóstico.
            </p>
            <p>
              Rechazar o desactivar la telemetría{" "}
              <strong className="text-foreground">no limita ninguna función del juego</strong>: la
              experiencia completa sigue disponible. Tampoco necesitas justificar la decisión ni crear
              ninguna cuenta para tomarla.
            </p>
          </Section>

          <Section title="8. Tus derechos">
            <p>
              Según tu jurisdicción (RGPD en la Unión Europea, CCPA/CPRA en California y normativas
              equivalentes), tienes derecho a acceder, rectificar, eliminar u oponerte al tratamiento de tus
              datos. Para ejercerlos, escríbenos a <Mail />.
            </p>
            <p>
              Una aclaración honesta: como la telemetría es anónima y no está vinculada a ninguna identidad,{" "}
              <strong className="text-foreground">no podemos localizar "tus" datos</strong> a partir de tu
              nombre o tu correo — esa imposibilidad es intencional y es la mayor garantía de privacidad que
              podemos ofrecerte. Si nos indicas un identificador de sesión concreto, eliminaremos esa sesión.
            </p>
            <p>
              Nunca vendemos ni compartimos datos personales, por lo que no existe un mecanismo de exclusión
              de venta ("Do Not Sell or Share") que aplicar.
            </p>
          </Section>

          <Section title="9. Menores de edad">
            <p>
              El juego no está dirigido específicamente a menores de 13 años y no recolectamos datos
              personales de ninguna persona, sea cual sea su edad. No mostramos publicidad, no hacemos
              publicidad conductual y no realizamos seguimiento entre aplicaciones o sitios web de terceros.
            </p>
          </Section>

          <Section title="10. Cambios en esta política">
            <p>
              Si modificamos esta política, publicaremos la versión actualizada en esta misma página y
              cambiaremos la fecha de "Última actualización". Los cambios sustanciales se anunciarán además
              dentro del juego.
            </p>
          </Section>

          <Section title="11. Contacto">
            <p>
              Cualquier duda, solicitud o reclamo sobre privacidad:{" "}
              <strong className="text-foreground">Sebastian Silva</strong> — <Mail />
            </p>
          </Section>

          <Section title="Anexo A — Etiquetas App Privacy de Apple">
            <p>
              Referencia para la ficha de la App Store. Todos los datos recolectados entran en la categoría{" "}
              <strong className="text-foreground">"Datos no vinculados a tu identidad"</strong> (
              <em>Data Not Linked to You</em>), y{" "}
              <strong className="text-foreground">no se realiza seguimiento</strong> (<em>Tracking: No</em>).
            </p>
            <Tabla
              head={["Categoría de Apple", "¿Se recolecta?", "Vinculado", "Seguimiento"]}
              rows={[
                ["Uso de datos → Interacción con el producto", <strong className="text-primary">Sí</strong>, "No", "No"],
                ["Diagnóstico → Fallos y rendimiento", <strong className="text-primary">Sí</strong>, "No", "No"],
                ["Información de contacto", "No", "—", "—"],
                ["Salud y forma física", "No", "—", "—"],
                ["Información financiera", "No", "—", "—"],
                ["Ubicación", "No", "—", "—"],
                ["Información sensible", "No", "—", "—"],
                ["Contactos", "No", "—", "—"],
                ["Contenido del usuario", "No", "—", "—"],
                ["Historial de navegación", "No", "—", "—"],
                ["Búsquedas", "No", "—", "—"],
                ["Identificadores (ID de usuario o dispositivo)", "No", "—", "—"],
                ["Compras", "No", "—", "—"],
                ["Otros datos", "No", "—", "—"],
              ]}
            />
            <p>
              Al no realizar seguimiento entre apps ni compartir datos con corredores de datos, el juego{" "}
              <strong className="text-foreground">
                no solicita permiso de App Tracking Transparency (ATT)
              </strong>
              .
            </p>
          </Section>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-rajdhani text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
