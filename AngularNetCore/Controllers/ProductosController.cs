using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularNetCore.Controllers.DatosFalsos;
using AngularNetCore.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : Controller
    {
        private DatosFalsosProductosController _datosFalsos;
            
        public ProductosController()
        {
            _datosFalsos = new DatosFalsosProductosController();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Productos>> ObtenerUtimosProducto()
        {   
            var fechaMes = DateTime.Now;
            List<Productos> productos = _datosFalsos.ObtenerUltimosProductosFalsos();

            productos = productos
                            .Where(x => x.FechaAlta.Month == fechaMes.Month)
                            .Take(4)
                            .ToList();
            return productos;
        }


        [HttpGet("{id}")]
        public ActionResult<Productos> ObtenerProducto(int id)
        {
            var productos = _datosFalsos.ObtenerUltimosProductosFalsos();
            Productos producto = productos.Find(x => x.Id.Equals(id));
            return producto;
        }

    }
}
