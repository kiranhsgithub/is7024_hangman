using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.Models
{
    public class Category
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public List<Word> Words { get; set; }

        public virtual string SelectedRandomWord { get; set; }

        public Category()
        {
            Words = new List<Word>();
        }



    }
}