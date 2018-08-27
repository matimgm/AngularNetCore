using System.Collections.Generic;

namespace AngularNetCore.Model.Producto.Tipo
{
    public class Categoria
    {
        public int Id { get; set; }

        public string Descripcion { get; set; }

        public List<Marca> Marcas { get; set; }

        public Categoria ()
        {
            Marcas = new List<Marca>();
        }
    }
}
