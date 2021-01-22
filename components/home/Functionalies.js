import React from 'react'
import Image from 'next/image'
import Collapsible from 'react-collapsible'

export const CollapseElements = () => {
  return (
    <React.Fragment>
      <div className={'w-full flex flex-row '}>
        <p>
          <span>Suscripciones:</span> Ofrece acceso por una cuota periódica. <br/>
          <span>Alquileres:</span> Cobra por acceso limitado a tu contenido. <br/>
          <span>Pay-Per-View:</span> Monetiza tu contenido por una tarifa única. <br/>
          <span>Crea paquetes:</span> Facilita acceso a un paquete por una tarifa única. <br/>
          <span>Prueba gratuita:</span> Permite a los usuarios disfrutar de tu contenido de forma gratuita durante un tiempo limitado. <br/>
          <span>“De por vida”:</span> Ofrece acceso por tiempo ilimitado a tu contenido por una tarifa única.
        </p>
      </div>
    </React.Fragment>
  )
}

const firstColmun = [
  'Visualización segura a nivel mundial',
  'Programa tus vídeo',
  'Selecciona tu modelo de negocio',
  'Pago sin fisuras',
  'Seguimiento de derechos de autor y pagos',
  'Upsells y cross-sells',
  'Personaliza con tu marca',
]

const secondColmun = [
  'Meta-Datos SEO',
  'Administra todos tus metadatos en un solo lugar',
  'Alojamiento de vídeo incorporado',
  'Crear capítulos, episodios o listas de reproducción',
  'Marca blanca, estable y confiable',
  'Una tarifa simple y predecible',
  'Seguimiento de tus venta',
  'Subir miniaturas personalizadas',
  'Pruebas gratuitas',
  'Pies de foto y subtítulos',
  'Cupones y promociones',
  'Reproductor de video HTML5',
  'Una experiencia visual inmejorable'
]

export default function Functionalies({viewport}) {
  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={`w-full flex flex-wrap functionalies-content`}>
          <div className={`w-full flex flex-wrap title`}>
            <p>Funcionalidades</p>
            <div className={'setting-img-content'}>
              <div className={'w-full flex flex-wrap setting-img'}>
                <Image
                  src={'/images/setting.png'}
                  layout={'fill'}
                />
              </div>
            </div>
          </div>
          <div className={'w-full flex flex-wrap grid grid-cols-2 gap-8 collapise-content'}>
            <div className={'w-full first-column'}>
              <p className={'description-content'}>
                <span className={'bold italic'}>Potencia tu negocio</span><br/><br/>
                Sabemos que dirigir un negocio de streaming de vídeo puede ser un desafío, por eso, nos hemos asegurado de que tengas todo lo necesario para tener éxito. Piensa en PLAYBAK como tu propio equipo de pit-stop para tu servicio de streaming de vídeo, con alojamiento ilimitado, seguridad “top of the line” y soporte las 24 horas.
              </p>
              {
                firstColmun.map((item, key) => {
                  return (
                    <Collapsible trigger={item} key={key}>
                      <CollapseElements />
                    </Collapsible>
                  )
                })
              }
            </div>
            <div className={'w-full second-column'}>
              {
                secondColmun.map((item, key) => {
                  return (
                    <Collapsible trigger={item} key={key}>
                      <CollapseElements />
                    </Collapsible>
                  )
                })
              }
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-full flex flex-wrap functionalies-content`}>
          <div className={`w-full flex flex-wrap title`}>
            <p>Funcionalidades</p>
          </div>
          <div className={'w-full flex flex-wrap collapise-content'}>
            <div className={'w-full first-column'}>
              <div className={'description-content'}>
                <span className={'bold italic'}>Potencia tu negocio</span><br/><br/>
                Sabemos que dirigir un negocio de streaming de vídeo puede ser un desafío, por eso, nos hemos asegurado de que tengas todo lo necesario para tener éxito. Piensa en PLAYBAK como tu propio equipo de pit-stop para tu servicio de streaming de vídeo, con alojamiento ilimitado, seguridad “top of the line” y soporte las 24 horas.
                <div className={'setting-img-content'}>
                  <div className={'w-full flex flex-wrap setting-img'}>
                    <Image
                      src={'/images/setting.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
              {
                firstColmun.map((item, key) => {
                  return (
                    <Collapsible trigger={item} key={key}>
                      <CollapseElements />
                    </Collapsible>
                  )
                })
              }
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}