﻿using System;
namespace _PA2
{
	public class StringMergeSort
	{

		private String[] array;
		private String[] mergedArray;
		private int n;

		public StringMergeSort(String[] array, int n)
		{
			this.array = array;
			this.n = n;
			this.mergedArray = new String[n];
		}

		public void mergesort()
		{
			mergesort(0, n - 1);
		}

		private void mergesort(int left, int right)
		{
			if (left == right)
				return;
			int mid = (left + right) / 2;
			mergesort(left, mid);
			mergesort(mid + 1, right);
			int i = left;
			while (i <= right)
			{
				mergedArray[i] = array[i];
				i++;
			}
			i = left;
			int j = mid + 1, k = left;
			while (i <= mid && j <= right)
				array[k++] = mergedArray[j].CompareTo(mergedArray[i]) < 0 ? mergedArray[j++] : mergedArray[i++];
			while (i <= mid)
				array[k++] = mergedArray[i++];
		}
	}
}
