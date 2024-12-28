# Glasify

## Descripción

Glassify es una aplicación desarrollada en Next.js que permite calcular precios para diversos productos como ventanas, espejos, barandas, entre otros. La idea central es partir de una superficie definida por un ancho (“width”) y alto (“height”), sobre el cual se aplican fórmulas específicas para calcular costos. Estas fórmulas aprovechan datos provenientes de una base de datos, que almacena los insumos y precios base necesarios. Glassify implementa el patrón de diseño Abstract Factory para garantizar flexibilidad y escalabilidad en el manejo de diferentes tipos de productos y cálculos.
---
## Grupos de productos

### Ventanas y puertas

- **Ventanas en PVC**
- **Puertas-Ventanas en PVC**
  - Correderas
  - Abatibles
  - Fijas
- **Ventanas en Aluminio**
- **Puertas-Ventanas en Aluminio**
  - Correderas
  - Abatibles
  - Fijas

### Cristalería y accesorios

- **Espejos**
  - Sencillos
  - Con luz LED
  - Personalizados (formas específicas)
- **Barandas**
- **Puertas de vidrio**
- **Divisiones de baño**
  - Deslizantes
  - Abatibles

---

## Vistas principales

### 1. Home

En esta vista inicial, se listan los productos disponibles en formato de tarjetas. Cada tarjeta incluye información relevante como:

```json
{
  "id": 1,
  "name": "Puerta Ventana en PVC XO",
  "dimensions": {
    "minWidth": 1200,
    "maxWidth": 2400,
    "minHeight": 1800,
    "maxHeight": 2400
  },
  "priceBase": 100
}
```

Cada producto también mostrará un rango de medidas admitidas y el precio base.

### 2. Detalle del producto

Al seleccionar un producto, el usuario accede a su vista de detalle, donde puede configurarlo según sus necesidades. Las opciones de configuración incluyen:

- **Dimensiones**: Ancho y alto.
- **Tipo de cristal**: Simple, laminado, templado, DVH, entre otros.
- **Color o acabado**: Diferentes opciones de estilo.
- **Herrajes**: Opciones disponibles según el producto.

Una vez configurado el producto, el usuario puede agregarlo a la "cesta". Después de esta acción, el usuario es redirigido nuevamente a la vista de inicio para seguir seleccionando productos.

### 3. Cesta

La cesta funciona como un carrito de compras, donde se listan los productos seleccionados. Cada producto se mostrará con los detalles de su configuración, como dimensiones, tipo de cristal, y herrajes.

### 4. Cotización

En esta vista se presenta un resumen de los productos seleccionados, incluyendo:

- Detalle de configuraciones.
- Subtotales, descuentos e impuestos aplicados.

El usuario puede generar un archivo PDF con el detalle completo de la cotización.

---

## Tecnologías utilizadas

- **Frontend**: Next.js, React.
- **Backend**: Server Actions para la gestión de datos.
- **Base de datos**:PostgreSQL para almacenar insumos y precios base.
- **Estilos**: SahdcnUI - Tailwind CSS o CSS-in-JS para diseño responsivo.
- **Patrón de diseño**: Abstract Factory para la generación de lógicas específicas por producto.
- **Generación de PDFs**: Librerías como jsPDF o Puppeteer.

---

## Funcionalidades adicionales

### Futuras mejoras

- **Autenticación de usuarios**: Permitir el inicio de sesión para guardar configuraciones y cotizaciones.
- **Historial de cotizaciones**: Los usuarios podrán acceder a cotizaciones anteriores.
- **Lenguajes de soporte**: Español.

---

## Contribución

Si deseas contribuir al proyecto:

1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza un pull request detallando tus cambios.

---

## Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

---

## Contacto

Para más información o consultas sobre el proyecto, puedes contactarnos en:

- **Correo electrónico**: support@glassify.com
- **Repositorio**: [GitHub](https://github.com/andeveling/glasify)
