using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.Models
{
    public class Category
    {

        public int Id { get; set; }

        public string Level { get; set; }

        public List<String> Words { get; set; }

        public string SelectedRandomWord { get; set; }

    }
}