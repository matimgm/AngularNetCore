using System.Collections.Generic;

namespace AngularNetCore.Model.Producto.Tipo
{
    public class Marca
    {
        public int Id { get; set; }
        
        public string Descripcion { get; set; }

        public List<Categoria> Categorias { get; set; }

        public Marca()
        {
            Categorias = new List<Categoria>();
        }
    }
}
