using AngularNetCore.Model.Producto.Tipo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNetCore.Model
{
    public class Productos
    {
        public int Id { get; set; }

        public string Descripcion { get; set; }
        
        public decimal Precio { get; set; }

        public Categoria Categoria { get;set; }

        public Marca Marca { get; set; }

        public Moneda Moneda { get; set; }

        public DateTime FechaAlta { get; set; }

        public Productos()
        {
            Categoria = new Categoria();
            Marca = new Marca();
            Moneda = new Moneda();
        }
    }
}
